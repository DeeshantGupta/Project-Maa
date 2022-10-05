const jwt = require("jsonwebtoken");

const User = require("../../db/models/userModel");

module.exports = {

    async checkUser(req, res, next) {

        const token = req.cookies.jwt;

        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
                if (err) {
                    res.send({ status: false });
                }
                else {

                    const user = await User.findById(decodedToken.id);

                    if (user) {
                        res.send({ status: true, user: user.email, id: decodedToken.id });
                    }

                    next();

                }
            })
        }
        else {
            res.send({ status: false });
        }

    }

}