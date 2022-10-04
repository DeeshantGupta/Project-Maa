
const mongoose = require("mongoose");

const connect = (URI) => {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Database Connected !");
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = connect;
