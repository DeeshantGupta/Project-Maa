
module.exports = {
    AUTH: {
        REGISTER: "/signup",
        LOGIN: "/login",
        VERIFYEMAIL:"/verifyemail",
        VERIFYOTP:"/verifyotp",
        NEWPASSWORD:"/newpassword"
    },
    USER:{
        CHECKUSER:"/checkuser",
        GETUSER:"/getuser/:id",
        POSTDETAILS:"/postdetails/:id",
        MOTHERCHILDINFO:"/motherchildinfo/:id",
        MOTHERFOOD:"/motherfood/:id",
        BABYCHANGES:"/babychanges/:id",
<<<<<<< HEAD
        DOCTOR:"/doctorsignup"
=======
        CALL:"/call/:id"
>>>>>>> 7ade032d894f30b34edf2d2b791018befc4c6667
    },
    ROUTES: {
        AUTH: "/auth",
        USER:"/user"
    },
    MODELS: {
        USER: "Users",
        BABY: "Baby",
        OTP: "Otp",
        MOTHER:"Mother",
        DOCTOR:"Doctor"
    }
}