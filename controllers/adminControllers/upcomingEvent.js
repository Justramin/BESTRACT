const upComingEvent = require('../../models/upComingEvent')



const upcomingEvent = async(req, res) => {
    res.render('upcomingEvent');
};

const addUpcomingEvent = async(req, res) => {
    res.render('addUpcomingEvent');
};

const addUpcomingEventPost = async(req, res) => {
    try {
        const { eventHeading, eventType, eventDate, location, status } = req.body;

        const newEvent = new upComingEvent({
            eventHeading,
            eventType,
            eventDate,
            location,
            status: status || true,
        });
        const saveEvent = await newEvent.save();
        console.log(saveEvent);
        
        res.redirect('/admin/upcomingEvent')
    } catch (error) {
        console.error("Error saving event:", error);
        res.status(500).json({ error: 'Failed to create event', details: error.message });
    }
    
};


module.exports = {
    upcomingEvent,
    addUpcomingEvent,
    addUpcomingEventPost
};