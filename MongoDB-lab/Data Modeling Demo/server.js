// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./db');

const User = require('./models/User');
const Task = require('./models/Task');

const app = express();

app.use(express.json()); // parse JSON request bodies

// Connect to MongoDB
connectDB();

// Create a User
app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Create a Task
app.post('/tasks', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all Users
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Get all Tasks
app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Get Tasks with populated User data
app.get('/tasks/populated', async (req, res) => {
  const tasks = await Task.find().populate('userId', 'name email');
  res.json(tasks);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});