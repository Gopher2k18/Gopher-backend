const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    name: String,
    user: String,
    tags: [String],
    ts: Number,
    link: String
});

module.exports = mongoose.model('Blog', EventSchema);