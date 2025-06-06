const Student = require("../models/Student");
const path = require("path");

// Dummy OTP for testing
let OTP_STORE = {}; // { phone: "123456" }

exports.sendOTP = (req, res) => {
  const { phone } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  OTP_STORE[phone] = otp;
  console.log(`OTP for ${phone}: ${otp}`);
  res.json({ success: true, message: "OTP sent successfully (dummy)", otp });
};

exports.uploadFile = (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded");
  res.json({ filePath: `/uploads/${req.file.filename}` });
};

exports.saveStudentData = async (req, res) => {
  try {
    const student = new Student(req.body);
    student.submittedAt = new Date();
    await student.save();
    res.json({ success: true, id: student._id });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
