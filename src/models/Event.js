const mongoose = require("mongoose");

var schema = mongoose.Schema({
    name: {
        type: String
    },
    organizer: {
        type: String
        // type: mongoose.Types.ObjectId,
        // ref: 'User'
    },
    date: {
        type: Date
    },
    description: {
        type: String,
    },
    postDate: {
        type: Date,
    },
    skills: {
        type: Array
    },    
    endDate: {
        type: Date
    },
    numVolunteers: {
        type: Number
    },
    Address: {
        type: String
    },
    City: {
        type: String
    }

})

module.exports = mongoose.model("Event", schema);