const mongoose = require("mongoose");

var schema = mongoose.Schema({
    username: {
        type: String
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