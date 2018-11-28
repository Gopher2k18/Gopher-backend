module.exports = (app) => {
    const event = require('../controllers/event.controller.js');

    // Create a new event
    app.post('/events', event.create);

    // Retrieve all event
    app.get('/events', event.findAll);

    // Delete event with  eventId
    app.delete('/events/:eventId', event.delete);

    // Retrieve a single Event with channel name
    app.get('/channels/:channel', event.findByChannelName);

    //Retrieve events with tag
    app.get('/tags/:tag', event.findByTag);

    // Retrieve all blogs
    app.get('/blogs', event.findAllBlogs);
    
}