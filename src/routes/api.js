var express = require("express");
    router = express.Router(),
    controllers = {
        user: require("./../controllers/User"),
        company: require("./../controllers/Company"),
        conv: require("../controllers/Converstions"),
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
        
        // Commented out below for now, session is undefined
        // res.session.user = user;
        res.status(200).json({error: false, user})


    } catch(e) {
        // Error condition
        // Something failed (DB or other)
        console.log(e);
        res.status(500).json({error: true, message: "Server error, please try again later"})
    }

})

router.post("/account", async (req,res) => {
    if (!req.body.username || !req.body.password) return res.status(400).json({error: true, message: "Bad Request"});
    try {
        var user = await controllers.user.create(req.body.username, req.body.password);
        if (!user) return res.status(422).json({ error: true, message: "User already exists" });
        return res.json({error: false, user});
    } catch(e) {
        console.log(e);
        return res.status(500).json({error: true, message: "Server Error"})
    }
})


router.post("/company", async (req,res) => {
    if (!req.body.name) return res.status(400).json({error: true, message: "Bad Request"})
    try {
        var company = await controllers.company.create(req.body.name);
        res.json({error: false, company});
    } catch(e) {
        res.status(500).json({error: true, message: "Server Error"})
    }
})

router.get("/company/:id", async (req,res) => {
    try {
        var company = await controllers.company.get(req.params.id);
        if (!company) return res.status(404).json({error: true, message: "Company not found"})
        res.json({error: false, company});
    } catch(e) {
        res.status(500).json({error: true, message: "Server Error"});
    }
})


/* TODO Needs some error handling probably */

router.post('/createconversation', async (req, res) => {
    const { name, userid } = req.body;
    console.log("create conversation");
    const conversation = await controllers.conv.createConversation(name, userid);
    res.status(200).json({ conversation });
});

/** Changed userid -> username as username should be unique anyway */
router.get('/conversations/:username', async (req, res) => {
    const { username } = req.params;
    const conversations = await controllers.conv.getConversations(username);
    res.status(200).json({ conversations });
});

/** Returns messages in the conversationId */
router.get('/messages/:conversationId', async (req, res) => {
    const { conversationId } = req.params;
    // console.log("getting messages");
    const messages = await controllers.conv.getMessages(conversationId);
    // console.log(messages);
    res.status(200).json({ messages });
});

module.exports = router;