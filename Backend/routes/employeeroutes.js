const express = require('express');
const router = express.Router();
const Employee = require('../models/schema');

// Create employee
router.post('/employees/create', async (req, res) => {
  try {
    const newEmployee = new Employee({
      fullname: req.body.fullname,
      nameWithInitials: req.body.nameWithInitials,
      preferredName: req.body.preferredName,
      gender: req.body.gender,
      dob: req.body.dob,
      email: req.body.email,
      mobileNumber: req.body.mobileNumber,
      designation: req.body.designation,
      employeeType: req.body.employeeType,
      experience: req.body.experience,
      joinedDate: req.body.joinedDate,
      salary: req.body.salary,
      personalNotes: req.body.personalNotes
    });

    await newEmployee.save();
    res.status(200).send("Employee added successfully!");
  } catch (err) {
    res.status(400).send(err);
  }
});
    
// Get all employees with filters
router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find(req.query);
    res.send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a single employee by id
router.get('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).send('Employee not found');
    }
    res.send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update an employee by id
router.patch('/employees/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['fullname', 'nameWithInitials', 'preferredName', 'gender', 'dob', 'email', 'mobileNumber', 'designation', 'employeeType', 'experience', 'joinedDate', 'salary', 'personalNotes'];
  const isValidUpdate = updates.every(update => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({ error: 'Invalid updates' });
  }

  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).send('Employee not found');
    }

    updates.forEach(update => {
      employee[update] = req.body[update];
    });
    await employee.save();

    res.send(employee);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete an employee by id
router.delete('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).send('Employee not found');
    }
    res.send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
