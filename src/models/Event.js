const mongoose = require("mongoose");

var schema = mongoose.Schema({
    name: {
        type: String
    },
    organizer: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
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
    }

})

module.exports = mongoose.model("Event", schema);