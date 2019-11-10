const mongoose = require("mongoose");

var schema = mongoose.Schema({
    description: {
        type: String
    },
    firstname: {
        type: String,
    },
    surname: {
        type: String,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    salt: {
        type: String
    },
    creationDate: {
        type: Date
    }
})

module.exports = mongoose.model("User", schema);