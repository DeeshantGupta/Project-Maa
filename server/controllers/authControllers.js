const User = require("../db/models/userModel");
const Otp = require("../db/models/otpModel");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const nodemailer = require("nodemailer");

const { google } = require("googleapis");

const maxAge = 3*24*60*60; 

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: maxAge
    });
}

async function sendEmail({ email }) {
    try {

        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: 'OAuth2',
                user: process.env.GMAIL,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken
            }
        });

        const otp = await generateOtp({ email });

        const mailOptions = {
            from: `Maatri <${process.env.GMAIL}>`,
            to: email,
            subject: "Verification mail",
            text: `This is your verification code - ${otp}`,
            html: `<h1>This is your verification code - <b>${otp}</b>.</h1>`
        };

        const result = await transport.sendMail(mailOptions);

        return result;

    } catch (err) {
        console.log(err);
    }
}



const generateOtp = async ({ email }) => {
    try {

        const otp = Math.floor(Math.random() * (10000 - 1000) + 1000);
        const expiredAt = Date.now() + 3600000;
        const newOtp = await Otp.create({ email, otp, createdAt: Date.now(), expiredAt });

        return otp;

    } catch (err) {
        console.log(err);
    }
}

module.exports = {

    async register(req, res) {
        try {

            const { email, name, password, mobile, address } = req.body;

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
                    mobile,
                    address
                })

                await newUser.save();

                res.send({ message: "true" });

            }
        } catch (err) {
            console.log(err);
        }

    },
    async login(req, res) {
        try {

            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (user) {

                const validPassword = await bcrypt.compare(password, user.password);

                if (validPassword) {

                    const token = generateToken(user._id);

                    res.cookie("jwt", token, {
                        withCredentials: true,
                        httpOnly: false,
                        maxAge: maxAge * 1000
                    })

                    res.send({ message: true, verified: user.verified, id:user._id, flag : user.detailsFlag });
                }
                else {
                    res.send({ message: "Invalid Credentials" });
                }
            }
            else {
                res.send({ message: "Invalid Credentials" });
            }

        } catch (err) {
            console.log(err);
        }
    },
    async verifyEmail(req, res) {

        try {
            const { email } = req.body;

            const user = await User.findOne({ email });

            if (user) {

                if (req.query.type == "register") {
                    if (user.verified == false) {
                        sendEmail(user).then(res => console.log("Email sent !"))
                            .catch(err => console.log(err));
                        res.send({ message: "true", type: "register" });
                    }
                    else {
                        res.send({ message: " Already Verified " });
                    }

                }
                else {
                    if (user.verified == true) {
                        sendEmail(user).then(res => console.log("Email sent !"))
                        .catch(err => console.log(err));
                        res.send({ message: "true", type: "forgotpassword" });
                    } else {
                        res.send({ message: "Invalid" });
                    }
                }


            }
            else {
                res.send({ message: "Invalid Credentials" });
            }
        } catch (err) {
            console.log(err);
        }

    },
    async verifyOtp(req, res) {

        const { email, otp1, otp2, otp3, otp4 } = req.body;

        const otp = `${otp1}` + `${otp2}` + `${otp3}` + `${otp4}`;

        const user = await Otp.findOne({ email });

        if (user) {
            if (user.expiredAt.getTime() < Date.now()) {
                res.send({ message: "Code Expired" });
                await Otp.deleteOne({ email });

            } else {

                if (otp != user.otp) {
                    res.send({ message: "Invalid Otp" });
                    await Otp.deleteOne({ email });
                } else {

                    const registerUser = await User.findOne({ email });

                    if (registerUser) {

                        await User.updateOne({ email }, {
                            $set: {
                                verified: true
                            }
                        })
                        await Otp.deleteOne({ email });
                        res.send({ message: "true" });
                    }
                    else {
                        res.send({ message: "Invalid Credentials !" });
                    }
                }
            }
        } else {
            res.send({ message: "Invalid Credentials" });
        }

    },
    async newPassword(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (user) {

            const hashPassword = await bcrypt.hash(password, 10);

            const updatePassword = await User.findOneAndUpdate({ email }, {
                $set: {
                    password: hashPassword
                }
            });

            res.send({ message: "true" });
        }
    }

}