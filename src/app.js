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

const PORT = process.env.PORT || 3001;

mongoose.connect(DB_CONNECTION_STRING, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, e => {
    if (e) {
        console.error(e);
        return;
    }
    server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});



/** Socket Stuff */

const socketmap = {};

io.on('connection', socket => {

    const { username } = socket.handshake.query;

    socketmap[username] = socket.id;

    socket.on('enter-conversation', conversationId => {
        socket.join(conversationId);
    });

    socket.on('leave-conversation', conversationId => {
        socket.leave(conversationId);
    });

    socket.on('new-message', async ({ sender, message, conversationId }) => {
        await controllers.conv.appendMessage(conversationId, sender, message);
        io.in(conversationId).emit("refresh-messages", sender, message, conversationId);
    });

    socket.on('add-user', async ({ conversationId, username }) => {
        try {
            const conversation = await controllers.conv.addUser(conversationId, username);
            /** Send refresh all to everyone in the conversation including the newly added member*/
            conversation.members.forEach(username => {
                if (!socketmap[username]) return;
                console.log("Emitting to", username, socketmap[username]);
                io.to(socketmap[username]).emit("refresh-conversations");
            });
        } catch (err) {
            return socket.emit("err", err.message);
        }
    });

    socket.on('disconnect', () => {
        delete socketmap[username];
        socket.leaveAll();
    });

});