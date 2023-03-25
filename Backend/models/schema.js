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
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  employeeType: {
    type: String,
    enum: ['Fulltime', 'Parttime', 'Contractor','Intern', 'Other'],
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  joinedDate: {
    type: Date,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  personalNotes: {
    type: String,
    required: true,
  },


});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
