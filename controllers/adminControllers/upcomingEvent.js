const upComingEvent = require('../../models/upComingEvent')
const mongoose = require('mongoose');




const upcomingEvent = async (req, res) => {
    try {
        const events = await upComingEvent.find();
        res.render('upcomingEvent', { events });
    } catch (error) {
        console.error('Error fetching upcoming events:', error);
        res.redirect('/admin/adminError');
    }
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
        await newEvent.save();
        
        res.redirect('/admin/upcomingEvent')
    } catch (error) {
        console.error("Error saving event:", error);
        res.redirect('/admin/adminError');
    }
    
};


const editUpcomingEventStatus = async (req, res) => {
    try {
        const UpcomingEventId = req.params.id;
        const UpcomingEventstatus = req.query.status;

     
        if (!mongoose.Types.ObjectId.isValid(UpcomingEventId)) {
            console.error('Invalid ObjectId:', UpcomingEventId);
            return res.redirect('/admin/adminError');
        }

        const statusToUpdate = UpcomingEventstatus === 'true' ? false : true;

        const result = await upComingEvent.updateOne(
            { _id: new mongoose.Types.ObjectId(UpcomingEventId) },
            { $set: { status: statusToUpdate } }
        );

        if (result.matchedCount === 0) {
            console.error('No document found with the provided ID.');
            return res.redirect('/admin/adminError');
        }

        res.redirect('/admin/upcomingEvent');
    } catch (error) {
        console.error('Error in editUpcomingEventStatus:', error);
        res.redirect('/admin/adminError');
    }
};



const editUpcomingEvent = async(req, res) => {
    try {
      const UpcomingEventId = req.params.id;
      const upcomingEventData = await upComingEvent.findOne({_id:UpcomingEventId});
        
      res.render('editUpcomingEvent', {
         event: upcomingEventData
    });
      
    } catch (error) {
        console.error("Error editUpcomingEvent:", error);
        res.redirect('/admin/adminError');
    }
    
};




const editUpcomingEventPost = async(req, res) => {
    try {
        const { eventHeading, eventType, eventDate, location } = req.body;
        const eventId = req.params.id;

        await upComingEvent.updateOne(
            { _id: eventId },
            {
                $set: {
                    eventHeading,
                    eventType,
                    eventDate: new Date(eventDate),
                    location,
                },
            }
        );

        res.redirect('/admin/upcomingEvent');
    } catch (error) {
        console.error("Error editUpcomingEventPost:", error);
        res.redirect('/admin/adminError');
    }
    
};







module.exports = {
    upcomingEvent,
    addUpcomingEvent,
    addUpcomingEventPost,
    editUpcomingEventStatus,
    editUpcomingEvent,
    editUpcomingEventPost
    
};