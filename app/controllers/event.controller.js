const Event = require('../models/message-model.js');

// Create and Save a new Event
exports.create = (req, res) => {
    // Validate request
    if(!req.body.message) {
        return res.status(400).send({
            message: "Message content can not be empty"
        });
    }


    // Create a Note
    const event = new Event({
        user: req.body.user || "Unnamed User", 
        message: req.body.message,
        channel: req.body.channel,
        tags: req.body.tags

    });

    // Save Event in the database
    event.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Event."
        });
    });
};

// Retrieve and return all events from the database.
exports.findAll = (req, res) => {
    Event.find()
    .then(events => {
        res.send(events);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving events."
        });
    });
};

// Delete a event with the specified EventId in the request
exports.delete = (req, res) => {
    Event.findByIdAndRemove(req.params.eventId)
    .then(event => {
        if(!event) {
            return res.status(404).send({
                message: "Event not found with id " + req.params.eventId
            });
        }
        res.send({message: "Event was deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'EventId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Event not found with id " + req.params.eventId
            });                
        }
        return res.status(500).send({
            message: "Could not delete event with id " + req.params.eventId
        });
    });
};

// Retrieve and return all events from the database.
exports.findByChannelName = (req, res) => {
    Event.find({channel: req.params.channel})
    .then(events => {
        res.send(events);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving events."
        });
    });
};

exports.findByTag = (req, res) => {
    Event.find({tags: req.params.tag})
    .then(events => {
        res.send(events);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving events."
        });
    });
};


