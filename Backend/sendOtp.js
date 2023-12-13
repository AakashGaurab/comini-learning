const nodemailer = require("nodemailer");

const sendOtpEmail = (email,otp) => {
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:'booking.hospital12@gmail.com',
            pass:"ubzppikhwbasdlzc"
        }
    })
    const mailOptions = {
        from:'booking.hospital12@gmail.com',
        to:email,
        subject:"OTP Verification Chrome Extension",
        text:`Your OTP is ${otp}`
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports = {sendOtpEmail}