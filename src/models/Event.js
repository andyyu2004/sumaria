const mongoose = require("mongoose");

var schema = mongoose.Schema({
    name: {
        type: String
    },
    creatorid: {
        type: mongoose.Types.ObjectId,
        required: true,
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
    address: {
        type: String
    },
    city: {
        type: String
    },
    province: {
        type: String
    },
    unit: {
        type: String
    }

})

module.exports = mongoose.model("Event", schema);