const User = require("../db/models/userModel");

const bcrypt = require("bcryptjs");

const jwt = require("jsonweboken");

const nodemailer = require("nodemailer");

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.TOKEN_AGE
    });
}

const sendOtp = async ({ email }) => {
   


}

module.exports = {

    async register(req, res) {
        try {

            const { email, name, password, phoneno, address } = req.bosy;

            const user = await User.findOne({ email });

            if (user) {
                res.send({ message: "User already registered !" });
            }
            else {

                const hashPassword = await bcrypt.hash(password, 10);

                const newUser = new User({
                    name,
                    email,
                    password: hashPassword,
                    phoneno,
                    address
                })

                await newUser.save();

            }
        } catch (err) {
            console.log(err);
        }

    },
    async login(req, res) {
        try{

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (user) {

            const validPassword = await bcrypt.compare(password, user.password);

            if (validPassword) {

                const token = generateToken(user._id);

                res.cookie("jwt", token, {
                    withCredentials: true,
                    httpOnly: false,
                    maxAge: process.env.TOKEN_AGE*1000
                })

                res.send({ message: true, verified: user.verified });
            }
            else {
                res.send({ message: "Invalid Credentials" });
            }
        }
        else {
            res.send({ message: "Invalid Credentials" });
        }

    }catch(err){
        console.log(err);
    }
    },
    async verifyEmail(req, res, next) {

        try{
            const { email } = req.body;

            const user = await User.findOne({ email });
    
            if (user) {
                sendOtp(user);
                res.send({message:"true",type:"register"});
            }
            else {
                res.send({ message: "Invalid Credentials" });
            }
        }catch(err){
            console.log(err);
        }

    }

}