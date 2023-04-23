
module.exports = {
    AUTH: {
        REGISTER: "/signup",
        LOGIN: "/login",
        VERIFYEMAIL: "/verifyemail",
        VERIFYOTP: "/verifyotp",
        NEWPASSWORD: "/newpassword"
    },
    USER: {
        CHECKUSER: "/checkuser",
        GETUSER: "/getuser/:id",
        POSTDETAILS: "/postdetails/:id",
        MOTHERCHILDINFO: "/motherchildinfo/:id",
        MOTHERFOOD: "/motherfood/:id",
        BABYCHANGES: "/babychanges/:id",
        CALL: "/call",
        DOCTOR: "/doctorsignup",
        RECOMMEND:"/recommend"
    },
    ROUTES: {
        AUTH: "/auth",
        USER: "/user"
    },
    MODELS: {
        USER: "Users",
        BABY: "Baby",
        OTP: "Otp",
        MOTHER: "Mother",
        DOCTOR: "Doctor"
    }
}