const { Schema, model } = require('mongoose');

const ConversationSchema = new Schema({
    name: String,
    members: [{
        type: String,
    }],
});

module.exports = model('Conversation', ConversationSchema);