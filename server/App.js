require("dotenv").config();

const express = require("express");

const cookieParser = require("cookie-parser");

const http = require("http");

const { Server } = require("socket.io")

const cors = require("cors");

const app = express();

const ChatForum = require("./db/models/ChatForumModel") ;

const port = 5000 || process.env.PORT;

const connect = require("./db/connection");

// const server = http.createServer(app);

const authRoute = require("./routes/authRoutes");
const userRoute = require("./routes/userRoutes");
const ctgRoute = require("./routes/ctgRoutes");
const CONSTANT = require("./utils/constants/appContants");

app.use(cors({
    origin: ["http://127.0.0.1:3000", "http://127.0.0.1:8000", "http://localhost:3000"],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}));

app.use(express.json());

app.use(cookieParser());

app.use(CONSTANT.ROUTES.AUTH, authRoute);
app.use(CONSTANT.ROUTES.USER, userRoute);
app.use("/scan", ctgRoute);

// const io = new Server(server);

io.on("connection",(socket)=>{
    socket.on("send_message",async(data)=>{
        console.log(data) ;
        let cf = await ChatForum.findOne({}) ;
        if(cf == null){
             cf =  ChatForum.create({
                chats :{
                    message : data.message
                }
               }) ;
        }else{
            cf.chats.push({message : data.message});
            cf.save();
        }

        if(cf.chats == undefined){
            console.log("No reverse") ;
            socket.broadcast.emit("receive_message",data) ;
        }
        else{
            console.log("In reverse") ;
            socket.broadcast.emit("receive_message",cf.chats.reverse()) ;
        }
    })
})

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
    connect(process.env.MONGO_URI);
});