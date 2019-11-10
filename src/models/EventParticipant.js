let mongoose = require("mongoose");

var schema = mongoose.Schema({
    event: {
        type: mongoose.Types.ObjectId,
        ref: "Event"
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("EventParticipant", schema);