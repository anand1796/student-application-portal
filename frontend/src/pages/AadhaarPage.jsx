import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../context/FormContext";
import "./AadhaarPage.css";

const AadhaarPage = () => {
  const navigate = useNavigate();
  const { formData, updateFormSection } = useForm();
  const [aadhaarNumber, setAadhaarNumber] = useState(
    formData.aadhaar.number || ""
  );
  const [name, setName] = useState(formData.aadhaar.name || "");
  const [dob, setDob] = useState(formData.aadhaar.dob || "");
  const [message, setMessage] = useState("");

  const handleNext = (e) => {
    e.preventDefault();

    if (!aadhaarNumber || !name || !dob) {
      setMessage("All fields are required.");
      return;
    }

    updateFormSection("aadhaar", { number: aadhaarNumber, name, dob });
    navigate("/education");
  };

  return (
    <div className="aadhaar-container">
      <h2 className="aadhaar-title">Step 1: Aadhaar Verification</h2>
      <form className="aadhaar-form" onSubmit={handleNext}>
        <input
          type="text"
          placeholder="Enter Aadhaar Number"
          value={aadhaarNumber}
          onChange={(e) => setAadhaarNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Date of Birth (DD/MM/YYYY)"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button type="submit">Next</button>
      </form>
      {message && <p className="aadhaar-message">{message}</p>}
    </div>
  );
};

export default AadhaarPage;
