const mongoose = require("mongoose");

var schema = mongoose.Schema({
    description: {
        type: String
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    prefername: {
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
    phone: {
        type: String,
        default: ''
    },
    event: {
        type: [mongoose.Schema.Types.ObjectId]
    },
    gender: {
        type: String
    },
    street: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    province: {
        type: String,
        default: ''
    },
    unit: {
        type: String,
        default: ''
    },
    birthDate: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model("User", schema);