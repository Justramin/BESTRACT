const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    organization: {
        type: String,
        required: true,
        trim: true,
    },
    promotionNotes: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: Boolean,
        default: true 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);
module.exports = Testimonial;
