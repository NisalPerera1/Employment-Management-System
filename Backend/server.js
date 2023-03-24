const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const employeeroutes = require('./routes/employeeroutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});


// Use employee routes
app.use(employeeroutes);
const PORT = 5000;

const URL = "mongodb+srv://nisaldilesh14:Nisal2015@cluster0.d51uoxy.mongodb.net/test?retryWrites=true&w=majority";

// Start the server after the database connection has been established
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Connect to the database
mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to Mongodb Atlas database');
    
  })
  .catch((err) => {
    console.log('Error connecting to database:', err);
  });
