const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    age: {
        type: Number,
        require: true,
        trim: true
    },
    contact: {
        type: String,
        require: true,
        trim: true
    },
    gender: {
        type: String,
        require: true,
        trim: true
    }
})

module.exports = mongoose.model("User", userSchema);
