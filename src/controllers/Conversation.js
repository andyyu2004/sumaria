const Conversation = require('../models/Conversation');
const Message = require('../models/Message');
const User = require('../models/User');

/** The userid of the user who created the conv */
async function createConversation(name, username) {
    const conversation = new Conversation({
        name,
        members: [username],
    });   
    return await conversation.save();
}

async function getConversations(userid) {
    return await Conversation.find({ members: userid });
}

async function appendMessage(conversationId, username, message) {
    const newMessage = new Message({
        conversationId,
        message,
        username,
    });
    return await newMessage.save();
}

async function getMessages(conversationId) {
    return await Message
        .find({ conversationId })
        .sort({ 'createdAt': 1 });
}

async function addUser(conversationId, username) {
    try {
        const user = await User.findOne({ username });
        if (user === null) throw Error("User does not exist");
        const conversation = await Conversation.findById(conversationId);
        if (conversation.members.includes(username)) throw Error("User already in conversation");
        conversation.members.push(username);
        return await conversation.save();
    } catch (e) {
        throw e;
    }
    
}   

module.exports = {
    createConversation,
    getConversations,
    appendMessage,
    getMessages,
    addUser,
};