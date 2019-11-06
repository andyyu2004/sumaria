const express = require("express"),
    app = express(),
    routes = {
        public: require("./routes/public"),
        api: require("./routes/api")
    },
    mongoose = require("mongoose");
    http = require('http');
    socketio = require('socket.io');


 const DB_USERNAME = "sumaria",
        DB_PASSWORD = "44Kq37la8ZJvc1Rm",
        DB_CONNECTION_STRING = "mongodb+srv://" + DB_USERNAME + ":" + DB_PASSWORD + "@sumaria-fcieh.mongodb.net/test?retryWrites=true&w=majority";

app.use("/api", routes.api);
app.use("/", routes.public);

const server = http.createServer(app);
const io = socketio.listen(server);

mongoose.connect(DB_CONNECTION_STRING, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, e => {
    if (e) {
        console.error(e);
        return;
    }
    // Start HTTP server on port 80
    server.listen(80);
});



/** Socket Stuff */

const socketmap = {};

io.on('connection', socket => {

    const { username } = socket.handshake.query;

    socketmap[username] = socket.id;
    // console.log("connected", username, userid);

    socket.on('enter-conversation', conversationId => {
        // console.log(`entering conversation ${conversationId}`);
        socket.join(conversationId);
    });

    socket.on('leave-conversation', conversationId => {
        // console.log(`Leaving conversation ${conversationId}`);
        socket.leave(conversationId);
    });

    socket.on('new-message', async ({ sender, message, conversationId }) => {
        // console.log("new message", message);
        await controllers.conv.appendMessage(conversationId, sender, message);
        io.in(conversationId).emit("refresh-messages");
    });

    socket.on('add-user', async ({ conversationId, username }) => {
        console.log(`adding user ${username} to ${conversationId}`);
        try {
            const conversation = await controllers.conv.addUser(conversationId, username);
            /** Send refresh all to everyone in the conversation including the newly added member*/
            // io.in(conversation._id).emit("refresh-conversations");
            conversation.members.forEach(username => {
                if (!socketmap[username]) return;
                console.log("Emitting to", username, socketmap[username]);
                io.to(socketmap[username]).emit("refresh-conversations")
            });
        } catch (err) {
            return socket.emit("err", err.message);
        }
    });

    socket.on('disconnect', () => {
        // console.log('user disconnected');
        delete socketmap[username];
        socket.leaveAll();
    });

});