const User = require("../db/models/userModel");
const Baby = require("../db/models/babyModel");

module.exports = {

    async getUser(req, res) {

        try {
            const { id } = req.params;

            const user = await User.findById({ _id: id });

            if (user) {
                res.send(user);
            }
        } catch (err) {
            console.log(err);
        }

    },
    async postDetails(req, res) {

        try {

            const { id } = req.params;

            const user = await User.findByIdAndUpdate({ _id: id }, {
                $set: {
                    detailsOne: {
                        age: req.body.user.age,
                        expecteddate: req.body.user.expecteddate,
                        childnumber: req.body.user.childnumber,
                        currentweek: parseInt(req.body.user.currentweek),
                        selectedFood: req.body.selectedFood,
                        createdTime: Date.now()
                    },
                    detailsFlag: true
                }
            });

            res.send({ message: "true", verified: user.detailsFlag });

        } catch (err) {
            console.log(err);
        }

    },
    async motherChildInfo(req, res) {

        try {

            const { id } = req.params;

            const user = await User.findById({ _id: id });

            let days = ((Date.now() - user.detailsOne.createdTime) / (1000 * 60 * 60 * 24)).toFixed(1);

            let week = Math.floor(days / 7);

            let currentweek = user.detailsOne.currentweek + week;

            const baby = await Baby.findOne({ week: currentweek });

            let motherChild = [];

            motherChild.push(baby);

            res.send({ info: motherChild });

        } catch (err) {
            console.log(err);
        }

    }

}