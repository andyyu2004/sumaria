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
    },
    email: {
        type: String
    },
    telephone: {
        type: String
    }
})

module.exports = mongoose.model("User", schema);