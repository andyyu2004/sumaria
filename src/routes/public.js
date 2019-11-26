const express = require("express"), 
    router = express.Router(),
    path = require("path");

router.use("/", (req,res) => {
    res.sendFile(path.resolve(__dirname + "../public/public/index.html"));
});

router.use("/build", express.static(path.resolve(__dirname + "/../public/build")));

module.exports = router;