let Event               = require("./../models/Event"),
    EventParticipant    = require("./../models/EventParticipant"),
    EventFile           = require("./../models/EventFile");

async function create(name, organizer, date, endDate, description, numVolunteers, address, city, province, unit = "N/A", skills) {
    var event = new Event({name, organizer, date, endDate, postDate: new Date(), description, numVolunteers, address, city, province, unit, skills});
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

async function addFile(eventID, file) {
    var event_file = new EventFile({event: eventID, file: {name: file.originalname, mimetype: file.mimetype, created: new Date(), path:file.path, size: file.size}});
    await event_file.save();
    return event_file;
}

async function getFile(id) {
    return await EventFile.findOne({_id: id}).lean().exec()
}

module.exports = {create, getAll, getById, addFile, getFile, getUserEvents, getEventParticipants}