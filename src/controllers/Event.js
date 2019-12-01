let Event               = require("./../models/Event"),
    EventParticipant    = require("./../models/EventParticipant"),
    EventFile           = require("./../models/EventFile");

async function create(creatorid, name, organizer, date, endDate, description, numVolunteers, address, city, province, unit = "N/A", skills) {
    var event = new Event({ creatorid, name, organizer, date, endDate, postDate: new Date(), description, numVolunteers, address, city, province, unit, skills});
    await event.save();
    return event;
}

async function getAll() {
    return await Event.find({});
}

async function getById(eventID) {
    return Event.findOne({_id: eventID}).lean().exec()
}

async function getUserEvents(userID) {
    var events = await EventParticipant.find({user:userID}).populate("event").exec();
    return events.map(e => e.event);
}

async function getEventParticipants(eventID) {
    var users = await EventParticipant.find({event: eventID}).populate("user").exec();
    return users.map(u => u.user);
}
async function getEventParticipant(eventID, userID) {
    return await EventParticipant.findOne({event: eventID, user: userID})
}

async function addFile(eventID, file) {
    var event_file = new EventFile({event: eventID, file: {name: file.originalname, mimetype: file.mimetype, created: new Date(), path:file.path, size: file.size}});
    await event_file.save();
    return event_file;
}

async function getFile(id) {
    return await EventFile.findOne({_id: id}).lean().exec()
}
async function getAllFiles(event_id) {
    return await EventFile.find({event: event_id})
}
async function register(userID, eventID) {
    var participant = new EventParticipant({user: userID, event: eventID})
    await participant.save();
    return participant;
}

async function deRegister(userID, eventID) {
    return await EventParticipant.remove({user: userID, event: eventID})
}

async function deleteEvent(eventID) {
    return await Event.remove({_id: eventID});
}
module.exports = {create, getAll, getById, addFile, getAllFiles, getFile, getUserEvents, getEventParticipants,getEventParticipant,register,deRegister,deleteEvent}