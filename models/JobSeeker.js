const mongoose = require('mongoose');

const jobSeekerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    interests: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const JobSeeker = mongoose.model('JobSeeker', jobSeekerSchema);

module.exports = JobSeeker;
