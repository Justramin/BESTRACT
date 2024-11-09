
const eventHistorySchema = require('../../models/eventHistory');

const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const eventHistory = async(req, res) => {
    res.render('eventHistory');
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

        const newEvent = new eventHistorySchema({
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

module.exports = {
    eventHistory,
    addEventHistory,
    addEventHistoryPost
};
