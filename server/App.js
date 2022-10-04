require("dotenv").config();

const express = require("express");

const app = express();

const port = 5000 || process.env.PORT;

const connect = require("./db/connection");

const authRoute = require("./routes/authRoutes");

const CONSTANT = require("./utils/constants/appContants");

app.use(CONSTANT.ROUTES.AUTH,authRoute);

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
    connect(process.env.MONGO_URI);
});