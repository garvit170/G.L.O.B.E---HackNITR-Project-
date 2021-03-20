const mongoose = require("mongoose");

const scholarshipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    numbers: {
        type: Number,
        required: true,
        required: true
    },
    eligibility: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model("Scholarship", scholarshipSchema);
