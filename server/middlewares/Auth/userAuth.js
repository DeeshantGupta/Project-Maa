const jwt = require("jsonwebtoken");

const User = require("../../db/models/userModel");

module.exports = {

    async checkUser(req, res, next) {

        const token = req.cookies.jwt;

        console.log(token);

        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
                if (err) {
                    console.log(err);
                    console.log("In token if");
                    res.send({ status: false });
                }
                else {

                    const user = await User.findById(decodedToken.id);

                    console.log("Correct else");

                    if (user) {
                        res.send({ status: true, user: user.email, id: decodedToken.id,flag: user.detailsFlag });
                    }

                    next();

                }
            })
        }
        else {
            console.log("Out token else");
            res.send({ status: false });
        }

    }

}