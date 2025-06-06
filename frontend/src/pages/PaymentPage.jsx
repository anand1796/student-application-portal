import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../context/FormContext";
import { toast } from "react-toastify";
import "./PaymentPage.css";

const PaymentPage = () => {
  const { updateFormSection } = useForm();
  const navigate = useNavigate();

  const [method, setMethod] = useState("");
  const [utr, setUtr] = useState("");
  const [screenshot, setScreenshot] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!method || !utr || !screenshot) {
      toast.error("Please fill all payment fields");
      return;
    }

    updateFormSection("payment", { method, utr, screenshot });
    toast.success("Payment details submitted!");
    navigate("/final");
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">Step 8: Fee Payment</h2>
      <p className="payment-description">Amount: ₹500 | Application Fee</p>

      <form className="payment-form" onSubmit={handleSubmit}>
        <label>Select Payment Method:</label>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          required
        >
          <option value="">-- Choose Method --</option>
          <option value="UPI">UPI</option>
          <option value="Card">Card</option>
          <option value="Net Banking">Net Banking</option>
        </select>

        <label>Enter UTR/Transaction Number:</label>
        <input
          type="text"
          value={utr}
          onChange={(e) => setUtr(e.target.value)}
          required
        />

        <label>Upload Payment Screenshot:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setScreenshot(e.target.files[0])}
          required
        />

        <button type="submit">Proceed to Final Submission</button>
      </form>
    </div>
  );
};

export default PaymentPage;
