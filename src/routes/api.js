var express = require("express");
    router = express.Router(),
    controllers = {
        user: require("./../controllers/User")
    },
    cookieSession = require("cookie-session");
  
router.use(
    // Random session key each start-up
    cookieSession({
        keys: [
        new Array(12)
            .fill(0)
            .map(e => {
            return String.fromCharCode(Math.floor(Math.random() * 50 * 90));
            })
            .join("")
        ]
    })
);

router.use(require("body-parser").json())

router.post("/account/login", async (req,res) => {
    if (!req.body.username || !req.body.password) return res.status(400).end("Bad Request");
    try {
        var user = await controllers.user.login(req.body.username, req.body.password);
        // User not found condition
        if (user == null) return res.status(404).json({error: true, message: "User not found"})
        // Bad credentials (invalid login)
        if (user == false) return res.status(401).json({error: true, message: "Invalid username or password"})

        // Login success
        res.session.user = user;
        res.json({error: false, user})


    } catch(e) {
        // Error condition
        // Something failed (DB or other)
        res.status(500).json({error: true, message: "Server error, please try again later"})
    }

})

router.post("/account", (req,res) => {
    if (!req.body.username || !req.body.password) return res.status(400).json({error: true, message: "Bad Request"});
    try {
        var user = await controllers.user.create(req.body.username, req.body.password);
        return res.json(user);
    } catch(e) {
        return res.status(500).json({error: true, message: "Server Error"})
    }

})