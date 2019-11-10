var User = require("./../models/User"),
    crypto = require("crypto");

function hash(str) {
    return crypto
        .createHash("sha256")
        .update(str)
        .digest("hex");
}
// 12 byte salt
function generateSalt() {
    return new Array(12)
    .fill(0)
    .map(e => {
    return String.fromCharCode(Math.floor(Math.random() * 50 * 90));
    })
    .join("")
}

async function create(username, password) {
    const prevUser = await User.findOne({ username });
    if (prevUser) return false;

    var salt = generateSalt();
    password = hash(password + salt);
    var user = new User({username, password, salt})
    await user.save();
    return {username}
}

async function login(username, password) {
    var user = await User.findOne({ username });
    // User not found
    if (!user) return null;
    var enc_password = hash(password + user.salt);
    // Correct login
    if (enc_password == user.password) {
        delete user.password;
        return user;
    };
    // User password incorrect
    return false;
}

module.exports = {login, create}