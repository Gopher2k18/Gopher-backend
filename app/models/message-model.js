const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    user: String,
    message: String,
    channel: String,
    tags: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model('Message', EventSchema);