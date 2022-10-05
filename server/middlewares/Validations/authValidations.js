
module.exports = {

    register(req, res, next) {

        const { name, email, password, confirmpassword, address, mobile } = req.body;

        const errors = {};
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!name) {
            errors.name = "Name required";
        } else if (name.length < 2) {
            errors.name = "Minimum 2 characters required";
        } else if (name.length > 18) {
            errors.name = "Maximum 18 characters required";
        }

        if (!email) {
            errors.email = "Email required";
        } else if (!regex.test(email)) {
            errors.email = "Incorrect Email Format";
        }

        if (!password) {
            errors.password = "Password required";
        } else if (password.length < 6) {
            errors.password = "Min 6 characters required";
        } else if (password.length > 12) {
            errors.password = "Max 12 characters allowed";
        }

        if (!confirmpassword) {
            errors.confirmpassword = "Confirm Password required";
        } else if (confirmpassword !== password) {
            errors.confirmpassword = "Confirm password didn't match password";
        }

        if (!mobile) {
            errors.mobile = "Mobile number required"
        } else if (mobile.length !== 10) {
            errors.mobile = "Mobile number is Invalid";
        }

        if (!address) {
            errors.address = "Home address required"
        }

        if (Object.keys(errors).length === 0) {
            next();
        }
        else {
            res.send({ errors });
        }
    },
    login(req, res, next) {
        const errors = {};
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const { email, password } = req.body;

        if (!email) {
            errors.email = "Email required";
        } else if (!regex.test(email)) {
            errors.email = "Incorrect Email Format";
        }

        if (!password) {
            errors.password = "Password required";
        } else if (password.length < 6) {
            errors.password = "Min 6 characters required";
        } else if (password.length > 12) {
            errors.password = "Max 12 characters allowed";
        }

        if (Object.keys(errors).length === 0) {
            next();
        }
        else {
            res.send({ errors });
        }
    },
    verifyEmail(req, res, next) {

        const { email } = req.body;

        const errors = {};

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!email) {
            errors.email = "Email required";
        } else if (!regex.test(email)) {
            errors.email = "Incorrect Email Format";
        }

        if (Object.keys(errors).length === 0) {
            next();
        }
        else {
            res.send({ errors });
        }

    },
    verifyOtp(req, res, next) {

        const errors = {};

        const { email, otp1, otp2, otp3, otp4 } = req.body;

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!email) {
            errors.email = "Email required";
        } else if (!regex.test(email)) {
            errors.email = "Incorrect Email Format";
        }

        if (!otp1) {
            errors.others = "Invalid";
        }

        if (!otp2) {
            errors.others = "Invalid";
        }

        if (!otp3) {
            errors.others = "Invalid";
        }

        if (!otp4) {
            errors.others = "Invalid";
        }

        if (Object.keys(errors).length === 0) {
            next();
        }
        else {
            res.send({ errors });
        }
    },
    newPassword(req, res, next) {
        const errors = {};

        const { email, password , confirmpassword} = req.body;

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!email) {
            errors.email = "Email required";
        } else if (!regex.test(email)) {
            errors.email = "Incorrect Email Format";
        }

        if (!password) {
            errors.password = "Password required";
        } else if (password.length < 6) {
            errors.password = "Min 6 characters required";
        } else if (password.length > 12) {
            errors.password = "Max 12 characters allowed";
        }

        if (!confirmpassword) {
            errors.confirmpassword = "Confirm Password required";
        } else if (confirmpassword !== password) {
            errors.confirmpassword = "Confirm password didn't match password";
        }

        if (Object.keys(errors).length === 0) {
            next();
        }
        else {
            res.send({ errors });
        }

    }
}