const express = require("express"), 
    router = express.Router(),
    path = require("path");

router.use(express.static(path.resolve(__dirname + "/../public/build")));

router.use("/", (req,res) => {
    res.sendFile(path.resolve(__dirname + "/../public/build/index.html"));
});

module.exports = router;