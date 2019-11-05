const express = require("express"),
    app = express(),
    routes = {
        public: require("./routes/public"),
        api: require("./routes/api")
    },
    mongoose = require("mongoose");

 const DB_USERNAME = "sumaria",
        DB_PASSWORD = "44Kq37la8ZJvc1Rm",
        DB_CONNECTION_STRING = "mongodb+srv://" + DB_USERNAME + ":" + DB_PASSWORD + "@sumaria-fcieh.mongodb.net/test?retryWrites=true&w=majority";

app.use("/api", routes.api);
app.use("/", routes.public);


mongoose.connect(DB_CONNECTION_STRING, (e) => {
    if (e) {
        console.error(e);
        return;
    }
    // Start HTTP server on port 80
    app.listen(80);
})