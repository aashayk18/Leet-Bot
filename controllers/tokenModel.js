const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const tokenSchema = new Schema({
    username: {
        type: "String",
        required: true,
        trim: true,
        unique: true
    },
    token: {
        type: "String",
        required: true,
        unique: true
    },
    repo: {
    type: "String",
    required: true,
    trim: true
    }
})

module.exports = mongoose.model("Tokens", tokenSchema)