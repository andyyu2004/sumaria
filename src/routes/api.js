var express = require("express");
    router = express.Router(),
    controllers = {
        user: require("./../controllers/User"),
        company: require("./../controllers/Company"),
        conv: require("../controllers/Conversation"),
        event: require("./../controllers/Event")
    },
    cookieSession = require("cookie-session"),
    path = require("path"),
    multer = require("multer"),
    upload = multer({ dest: path.resolve(__dirname + "/../hosted_files") });

  
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

router.post("/user/login", async (req,res) => {
    if (!req.body.username || !req.body.password) return res.status(400).end("Bad Request");
    try {
        var user = await controllers.user.login(req.body.username, req.body.password);
        // User not found condition
        if (user == null) return res.status(404).json({error: true, message: "User not found"})
        // Bad credentials (invalid login)
        if (user == false) return res.status(401).json({error: true, message: "Invalid username or password"})
        // Login success
        
        res.session = { user };
        res.status(200).json({error: false, user})


    } catch(e) {
        // Error condition
        // Something failed (DB or other)
        console.log(e);
        res.status(500).json({error: true, message: "Server error, please try again later"})
    }

})

router.post("/user", async (req,res) => {
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

router.post("/event", async (req,res) => {
    const { creatorid, name, organizer, date, enddate, description, city, province, numVolunteers, address, skills } = req.body;
    if (!creatorid || !name || !organizer || !date || !enddate || !description || !numVolunteers || !address || !skills) return res.status(400).json({error: true, message: "Missing fields"})
    try {
        var event = await controllers.event.create(creatorid, req.body.name, req.body.organizer, req.body.date, req.body.enddate, req.body.description, req.body.numVolunteers, req.body.address, req.body.city, req.body.province, req.body.unit, req.body.skills);
        res.json({error: false, event})
    } catch(e) {
        console.log(e);
        return res.status(500).json({error: true, message: "Server Error"})
    }
})

router.post("/session", async (req,res) => {
    if (!req.session.user) return res.status(400).json({error: true, message: "Bad Request"})
    try {
        var session = req.session.user;
        res.json({error: false, session})
    } catch(e){
        return res.status(500).json({error: true, message: "Server Error"})
    }
})

router.get("/user/:username", async (req,res) => {
    try {
        var user = await controllers.user.getByUsername(req.params.username);
        if (!user) return res.status(404).json({error: true, message: "User not found"})
        res.json({error: false, user});
    } catch(e){
        return res.status(500).json({error: true, message: "Server Error"})
    }
})

router.get("/user/:id", async (req,res) => {
    try {
        var user = await controllers.user.getBy(req.params.id);
        if (!user) return res.status(404).json({error: true, message: "User not found"})
        res.json({error: false, user});
    } catch(e){
        return res.status(500).json({error: true, message: "Server Error"})
    }
})

router.get("/company/:id", async (req,res) => {
    try {
        var company = await controllers.company.getById(req.params.id);
        if (!company) return res.status(404).json({error: true, message: "Company not found"})
        res.json({error: false, company});
    } catch(e) {
        res.status(500).json({error: true, message: "Server Error"});
    }
})

router.get("/events", async(req,res) => {
    try {
        console.log(req.session.user);
        const events = await controllers.event.getAll();
        res.json({error: false, events})
    } catch(e) {
        return res.status(500).json({error: true, message: "Server Error"})
    }
})
    
router.get("/event/:id", async(req,res) => {
    try {
        var event = await controllers.event.getById(req.params.id);
        res.json({error: false, event})
    } catch(e) {
        return res.status(500).json({error: true, message: "Server Error"})
    }
})

router.get("/event/:id/file/:fileID",async (req,res) => {
    try {
        var file = await controllers.event.getFile(req.params.fileID);
        res.header("content-disposition", "attachment; filename=\"" + file.file.name +"\"");
        res.header("content-type", file.file.mimetype)
        res.sendFile(path.resolve(file.file.path));
    } catch(e) {
        return res.status(500).json({error: true, message: "Server Error"})
        
    }
})

router.post("/event/:id/file", upload.single("file"), async (req,res) => {
    if (!req.file) return res.status(400).json({error: true, message: "Bad Request"})
    try {
        var file = await controllers.event.addFile(req.params.id, req.file);
        res.json({error: false, file})
    } catch(e) {
        console.log(e)
        return res.status(500).json({error: true, message: "Server Error"})
    }
})

router.get("/event/:id/participants", async (req,res) => {
    try {
        var participants = await controllers.event.getEventParticipants(req.params.id)
        res.json({error: false, participants})
    } catch(e) {
        return res.status(500).json({error: true, message: "Server Error"})
    }
})

/* TODO Needs some error handling probably */

router.post('/conversation', async (req, res) => {
    const { name, userid } = req.body;
    const conversation = await controllers.conv.createConversation(name, userid);
    res.status(200).json({ conversation });
});

/** Changed userid -> username as username should be unique anyway */
router.get('/conversation/user/:userid', async (req, res) => {
    const { userid } = req.params;
    const conversations = await controllers.conv.getConversations(userid);
    res.status(200).json({ conversations });
});

/** Returns messages in the conversationId */
router.get('/conversation/:id/messages', async (req, res) => {
    const { id } = req.params;
    const messages = await controllers.conv.getMessages(id);
    res.status(200).json({ messages });
});


router.get("*", (req, res) => res.status(404).send("404"));

module.exports = router;