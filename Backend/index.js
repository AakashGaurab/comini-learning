const express = require("express");

const app = express();
const cors = require("cors");
var rhymes = require('rhymes')
const {sendOtpEmail} = require("./sendOtp")
app.use(express.json());

app.use(cors({origin:"*"}));

app.get("/",(req,res)=>{
    res.json("HEY");
})

app.post("/rhyme",(req,res)=>{
    let text = req.body.text;
    let rhymeword = "";
    rhymeword= rhymes(text);

    res.json({"word":rhymeword});
})



app.post('/validate-email', async (req, res) => {
    const email = req.body.email;
    const otp = req.body.otp;
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email address' });
    }
    sendOtpEmail(email, otp);
    res.json({ success: true, message: 'OTP sent successfully' });
});


app.listen(3501,()=>{
    console.log("http://localhost:3501");
})