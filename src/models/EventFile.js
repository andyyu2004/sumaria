let mongoose = require("mongoose");

var schema = mongoose.Schema({
    event: {
        type: mongoose.Types.ObjectId,
        ref: "Event"
    },
    file: {
        name: String,
        path: String,
        mimetype: String,
        created: Date
    }
})

module.exports = mongoose.model("EventFile", schema);