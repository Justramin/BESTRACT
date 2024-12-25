const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'finish'],
    default: 'pending',
  },
  needsApproval: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = ToDo;
