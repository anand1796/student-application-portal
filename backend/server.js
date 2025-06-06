// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/payment", require("./routes/paymentRoutes"));

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB connected");
});

app.use("/api/otp", require("./routes/otpRoutes"));
app.use("/api/upload", require("./routes/uploadRoutes"));
app.use("/api/student", require("./routes/studentRoutes"));

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
