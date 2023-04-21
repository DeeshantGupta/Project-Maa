
module.exports = {
    AUTH: {
        REGISTER: "/signup",
        LOGIN: "/login",
        VERIFYEMAIL: "/verifyemail",
        VERIFYOTP: "/verifyotp",
        NEWPASSWORD: "/newpassword"
    },
<<<<<<< HEAD
    USER:{
        CHECKUSER:"/checkuser",
        GETUSER:"/getuser/:id",
        POSTDETAILS:"/postdetails/:id",
        MOTHERCHILDINFO:"/motherchildinfo/:id",
        MOTHERFOOD:"/motherfood/:id",
        BABYCHANGES:"/babychanges/:id",
        DOCTOR:"/doctorsignup",
        DOCTORINFO: "/doctor/info/:id"
=======
    USER: {
        CHECKUSER: "/checkuser",
        GETUSER: "/getuser/:id",
        POSTDETAILS: "/postdetails/:id",
        MOTHERCHILDINFO: "/motherchildinfo/:id",
        MOTHERFOOD: "/motherfood/:id",
        BABYCHANGES: "/babychanges/:id",
        CALL: "/call",
        DOCTOR: "/doctorsignup"
>>>>>>> 6f8024cc83ecf8cb45b0c2d00e7457c514459f49
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