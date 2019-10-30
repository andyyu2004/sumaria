const mongoose = require("mongoose");

var schema = mongoose.Schema({
    name: {
        type: String
    },
    creationDate: {
        type: Date
    }
})

module.exports = mongoose.model("Company", schema);