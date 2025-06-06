const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  phone: String,
  aadhaarNumber: String,
  aadhaarFile: String,
  education: {
    board: String,
    standard: String,
    marks: String,
    marksheet: String,
  },
  address: {
    district: String,
    taluk: String,
    fullAddress: String,
    schoolName: String,
    schoolAddress: String,
  },
  documents: {
    photo: String,
    studentId: String,
  },
  payment: {
    method: String,
    utr: String,
    screenshot: String,
  },
  submittedAt: Date,
});

module.exports = mongoose.model("Student", studentSchema);
