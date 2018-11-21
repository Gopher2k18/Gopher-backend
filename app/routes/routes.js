module.exports = (app) => {
    const event = require('../controllers/event.controller.js');

    // Create a new Note
    app.post('/events', event.create);

    // Retrieve all Notes
    app.get('/events', event.findAll);

    // Delete event with  eventId
    app.delete('/events/:eventId', event.delete);

 }