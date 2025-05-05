const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    gpa: Number,
});

module.exports = mongoose.model("students", userSchema);

