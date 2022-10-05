require("dotenv").config();

const express = require("express");

const cookieParser = require("cookie-parser");

const cors = require("cors");

const app = express();

const port = 5000 || process.env.PORT;

const connect = require("./db/connection");

const authRoute = require("./routes/authRoutes");
const userRoute = require("./routes/userRoutes");

const CONSTANT = require("./utils/constants/appContants");

app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}));

app.use(express.json());

app.use(cookieParser());

app.use(CONSTANT.ROUTES.AUTH, authRoute);
app.use(CONSTANT.ROUTES.USER, userRoute);

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
    connect(process.env.MONGO_URI);
});