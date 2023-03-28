const Doctor = require("../db/models/doctorModel");
const User = require("../db/models/userModel");

const nodemailer = require("nodemailer");

const { google } = require("googleapis");

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

module.exports = {

    async registerDoctor(req, res) {
        try {

            const { name, email, designation, hospital_name_address, image, description } = req.body;

            const doctor = new Doctor({
                name,
                email,
                designation,
                hospital_name_address,
                image,
                description
            });

            await doctor.save();

        } catch (err) {
            console.log(err);
        }
    },
    async bookAppointment(req, res) {
        try {
            const { u_id, did } = req.params;

            const user = await User.findById({ _id: u_id });

            const doctor = await Doctor.findById({ _id: did });

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

            const mailOptions = {
                from: `Maatri <${process.env.GMAIL}>`,
                to: doctor.email,
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

}