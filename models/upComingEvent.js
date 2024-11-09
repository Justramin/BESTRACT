const mongoose = require('mongoose');

const upComingEventSchema = new mongoose.Schema({
  eventHeading: {
    type: String,
    required: true,
    trim: true,
  },
  eventType: {
    type: String,
    required: true,
    trim: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const upComingEvent = mongoose.model('upComingEvent', upComingEventSchema);

module.exports = upComingEvent;
