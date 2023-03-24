const express = require('express');
const router = express.Router();
const Employee = require('../models/schema');

// Create employee
router.post('/employees', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send(employee);
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
  const allowedUpdates = ['name', 'employeeId', 'designation', 'employeeType', 'experience'];
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
