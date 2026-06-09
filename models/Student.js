const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  attendance: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
