const mongoose = require('mongoose');

const eventHistorySchema = new mongoose.Schema({
    mainHeading: {
        type: String,
        required: true,
        trim: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    eventType: {
        type: String,
        required: true,
        trim: true
    },
    subHeading: {
        type: String,
        required: true,
        trim: true
    },
    shortDescription: {
        type: String,
        required: true,
        trim: true
    },
    images: {
        type: [String],
        required: true
    },
    status: {
        type: Boolean,
        default: true 
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});


const EventHistory = mongoose.model('EventHistory', eventHistorySchema);

module.exports = EventHistory;
