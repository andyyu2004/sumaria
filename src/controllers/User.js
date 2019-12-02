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

async function create(username, password, firstname, lastname, prefername, email, phone, gender, street, city, province, unit, birthDate) {
    const prevUser = await User.findOne({ username });
    if (prevUser) return false;
    var salt = generateSalt();
    password = hash(password + salt);
    var user = new User({username, password, event: [], firstname, lastname, prefername, creationDate: new Date(), email, phone, gender, street, city, province, unit, salt})
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

async function getById(id){
    return await User.findOne({_id: id}).lean().exec();
}

async function getByUsername(username){
    return await User.findOne({"username": username });
}

async function patchUser(user){
    //console.log('patch', user);
    return await User.findOneAndUpdate({_id: user._id}, user, {new: true});
}

module.exports = {login, create, getById, getByUsername, patchUser}