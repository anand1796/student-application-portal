import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../context/FormContext";
import "./EducationPage.css";

const EducationPage = () => {
  const navigate = useNavigate();
  const { formData, updateFormSection } = useForm();

  const [board, setBoard] = useState(formData.education.board || "");
  const [className, setClassName] = useState(
    formData.education.className || ""
  );
  const [marks, setMarks] = useState(formData.education.marks || "");
  const [message, setMessage] = useState("");

  const handleNext = (e) => {
    e.preventDefault();

    if (!board || !className || !marks) {
      setMessage("Please fill in all fields.");
      return;
    }

    updateFormSection("education", { board, className, marks });
    navigate("/address");
  };

  return (
    <div className="education-container">
      <h2 className="education-title">Step 2: Educational Details</h2>
      <form className="education-form" onSubmit={handleNext}>
        <input
          type="text"
          placeholder="Enter Board Name"
          value={board}
          onChange={(e) => setBoard(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Class (e.g., 10th, 12th)"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Marks/Percentage"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <button type="submit">Next</button>
      </form>
      {message && <p className="education-message">{message}</p>}
    </div>
  );
};

export default EducationPage;
