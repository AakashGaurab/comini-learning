const express = require("express");

const app = express();
const cors = require("cors");
var rhymes = require('rhymes')
app.use(express.json());

app.use(cors({origin:"*"}));

app.get("/",(req,res)=>{
    res.json("HEY");
})

app.get("/rhyme",(req,res)=>{
    let text = req.body.text;
    let rhymeword = "";
    rhymeword= rhymes(text);

    res.json({"word":rhymeword});
})


app.listen(3501,()=>{
    console.log("http://localhost:3501");
})