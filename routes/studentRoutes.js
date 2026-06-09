const express = require("express");
const router = express.Router();
const Student = require("../models/Student");


// Add student
router.post("/add", async (req, res) => {
  try {
    const student = new Student({
      name: req.body.name,
    });

    await student.save();

    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Mark attendance
router.put("/attendance/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    student.attendance += 1;

    await student.save();

    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// View all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();

    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
