const express = require("express"),
    app = express(),
    routes = {
        public: require("./routes/public"),
        api: require("./routes/api")
    }


app.use("/api", route.api);
app.use("/", routes.public);


// Start HTTP server on port 80
app.listen(80);