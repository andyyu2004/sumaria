const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    conversationId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

/** Mongoose chooses collection name by pluralizing model name (in lower case)*/
module.exports = model("Message", messageSchema);