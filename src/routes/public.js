const express = require("express"), 
    router = express.Router(),
    path = require("path");

router.use("/build", express.static(path.resolve(__dirname + "/../public/build")));

router.use("/", (req,res) => {
    console.log("Serving root");
    res.sendFile(path.resolve(__dirname + "/../public/build/index.html"));
});


module.exports = router;