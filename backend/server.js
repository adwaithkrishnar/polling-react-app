const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://adwaith_nandhu:SnRNYEi7Lx1Glub0@cluster0.afvpzcn.mongodb.net/pollappDB")

app.use("/",require("./routes/pollRoute"))

app.listen(3001,function(){
    console.log("server is running")
}); 