const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Database connection successful'))
.catch((err) => console.error('Database connection error:', err));

// Student Schema and Model
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  course: { type: String, required: true }
});
const Student = mongoose.model('Student', studentSchema);

// POST route to add student
app.post('/students', async (req, res) => {
  try {
    const { name, course } = req.body;
    const newStudent = new Student({ name, course });
    await newStudent.save();
    res.json({ message: 'Student saved successfully', student: newStudent });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save student' });
  }
});

// GET route to fetch students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});