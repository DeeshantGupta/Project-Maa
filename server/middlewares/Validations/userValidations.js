
module.exports = {
    detailsOne(req, res, next) {
        const errors = {};

        if (!req.body.user.age) {
            errors.age = "Mother's age required";
        } else if (req.body.user.age < 0) {
            errors.age = "Invalid Age";
        }

        if (!req.body.user.expecteddate) {
            errors.expecteddate = "Expected date required";
        }

        if (!req.body.user.childnumber) {
            errors.childnumber = "Child number required";
        } else if (req.body.user.childnumber < 0) {
            errors.childnumber = "Invalid child number";
        }

        if (!req.body.user.currentweek) {
            errors.currentweek = "Current week required";
        } else if (req.body.user.currentweek < 0) {
            errors.currentweek = "Current week should be greater than or equal to 0";
        } else if (req.body.user.currentweek > 42) {
            errors.currentweek = "Current week should be less than 42";
        }

        if (!req.body.selectedFood) {
            errors.food = "Food Category required";
        }

        if (Object.keys(errors).length === 0) {
            next();
        }
        else {
            res.send({ errors });
        }
    }
}