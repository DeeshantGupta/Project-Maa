
module.exports = {
    detailsOne(req, res, next) {
        const errors = {};

        const { age, expecteddate, childnumber, currentweek, selectedFood } = req.body;

        if (!age) {
            errors.age = "Mother's age required";
        } else if (age < 0) {
            errors.age = "Invalid Age";
        }

        if (!expecteddate) {
            errors.expecteddate = "Expected date required";
        }

        if (!childnumber) {
            errors.childnumber = "Child number required";
        } else if (childnumber < 0) {
            errors.childnumber = "Invalid child number";
        }

        if (!currentweek) {
            errors.currentweek = "Current week required";
        } else if (currentweek < 0) {
            errors.currentweek = "Current week should be greater than or equal to 0";
        } else if (currentweek > 42) {
            errors.currentweek = "Current week should be less than 42";
        }

        if (!selectedFood) {
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