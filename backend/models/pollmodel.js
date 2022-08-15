const mongoose = require("mongoose");

const pollSchema ={
    poll : Array
}

const Poll  = mongoose.model("Poll",pollSchema)

module.exports = Poll;