
const eventHistoryModel = require('../../models/eventHistory');

const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});








const eventHistory = async (req, res) => {
    try {
        const eventHistoryData = await eventHistoryModel.find();
        res.render('eventHistory', { eventHistoryData });
    } catch (error) {
        console.error("Error eventHistory:", error);
        res.redirect('/admin/adminError');
    }
};


const addEventHistory =async (req, res) => {
    res.render('addEventHistory');
};


const addEventHistoryPost = async (req, res) => {
    try {
        const files = req.files;
        const uploadedImages = [];

        for (const file of files) {
            const result = await cloudinary.uploader.upload(file.path);
            uploadedImages.push(result.secure_url);
        }

        const newEvent = new eventHistoryModel({
            mainHeading: req.body.mainHeading,
            eventType: req.body.eventType,
            eventDate: req.body.eventDate,
            location: req.body.location,
            subHeading: req.body.subHeading,
            shortDescription: req.body.shortDescription,
            images: uploadedImages
        });
        await newEvent.save();

        // console.log("Event saved successfully:", newEvent);
        res.redirect('/admin/eventHistory');


    } catch (error) {
        console.error("Error uploading images:", error);
        res.status(500).json({ message: "Failed to upload images", error });
    }
};



const editEventHistoryStatus = async (req, res) => {
    try {
        const eventId = req.params.id; 
        const currentStatus = req.query.status === 'true'; 
        const updatedStatus = !currentStatus;

            await eventHistoryModel.findByIdAndUpdate(eventId, { status: updatedStatus });
            res.redirect('/admin/eventHistory'); 
    } catch (error) {
        console.error("Error editEventHistoryStatus:", error);
        res.redirect('/admin/adminError');
    }
};

const editEventHistory = async (req, res) => {
    try {
        const eventHistoryId = req.params.id;
        const eventHistoryData = await eventHistoryModel.findOne({_id:eventHistoryId});

        res.render('editEventHistory', {
            event:eventHistoryData
       });
    } catch (error) {
        console.error("Error editEventHistory:", error);
        res.redirect('/admin/adminError');
    }
};

const updateEventHistory = async (req, res) => {
    try {
        const { mainHeading, eventDate, location, eventType, subHeading, shortDescription, removedImages } = req.body;

        const eventHistoryId = req.params.id;
        const eventHistory = await eventHistoryModel.findOne({ _id: eventHistoryId });

        // Parse removed images
        const removedImagesArray = JSON.parse(removedImages || '[]');

        // Remove images listed in removedImagesArray
        eventHistory.images = eventHistory.images.filter(image => !removedImagesArray.includes(image));

        // Handle new uploaded images
        if (req.files && req.files.length > 0) {
            const newImages = req.files.map(file => file.path); 
            eventHistory.images.push(...newImages);
        }

        // Update event history fields
        eventHistory.mainHeading = mainHeading;
        eventHistory.eventDate = new Date(eventDate); // Convert to date
        eventHistory.location = location;
        eventHistory.eventType = eventType;
        eventHistory.subHeading = subHeading;
        eventHistory.shortDescription = shortDescription;

        // Save updated event history
        await eventHistory.save();

        res.redirect('/admin/eventHistory');
    } catch (error) {
        console.error("Error updateEventHistory:", error);
        res.redirect('/admin/adminError');
    }
};

module.exports = {
    eventHistory,
    addEventHistory,
    addEventHistoryPost,
    editEventHistoryStatus,
    editEventHistory,
    updateEventHistory
};
