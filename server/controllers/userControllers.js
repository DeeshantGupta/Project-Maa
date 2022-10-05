const User = require("../db/models/userModel");

module.exports = {

    async getUser(req, res) {

        try {
            const { id } = req.params;

            const user = await User.fineById({ _id: id });

            if (user) {
                res.send(user);
            }
        } catch (err) {
            console.log(err);
        }

    },
    async postDetails(req, res) {

    }

}