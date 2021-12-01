const mongoose = require("mongoose")
const kidSchema = mongoose.Schema({nationality: String,blood_group: String,age: {type:Number,min:5,max:100}})
module.exports = mongoose.model("kid",kidSchema)