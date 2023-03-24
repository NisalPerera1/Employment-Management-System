const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  employeeId: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  employeeType: {
    type: String,
    enum: ['fullTime', 'partTime', 'contract', 'other'],
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
