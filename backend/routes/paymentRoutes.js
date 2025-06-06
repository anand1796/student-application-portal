// routes/paymentRoutes.js
const Razorpay = require("razorpay");
const express = require("express");
const router = express.Router();

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

router.post("/create-order", async (req, res) => {
  const options = {
    amount: 10000, // ₹100 in paise
    currency: "INR",
    receipt: "rcptid_" + Date.now(),
  };
  const order = await instance.orders.create(options);
  res.json(order);
});

module.exports = router;
