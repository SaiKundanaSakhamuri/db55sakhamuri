const mongoose = require("mongoose")
const kidSchema = mongoose.Schema({
    age: Number,
    nationality: String,
    blood_group: String
})

module.exports = mongoose.model("kid",kidSchema);