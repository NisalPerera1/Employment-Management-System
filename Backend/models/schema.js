const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  nameWithInitials: {
    type: String,
    required: true,
  },
  preferredName: {
    type: String,
    required: true,
  },
  employeeId: {
    type: Number,
    required: flase,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
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
  joinedDate: {
    type: Date,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  personalNotes: {
    type: String,
    required: true,
  },


});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
