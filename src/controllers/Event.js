let Event = require("./../models/Event"),
    EventParticipant = require("./../models/EventParticipant");

async function create(name, organizer, date, description) {
    var event = new Event({name, organizer, date, postDate: new Date(), description});
    await event.save();
    return event;
}

async function get(eventID) {
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

module.exports = {create, get, getUserEvents, getEventParticipants}