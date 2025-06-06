import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../context/FormContext";
import { toast } from "react-toastify";
import "./FinalPage.css";

const FinalPage = () => {
  const { formData } = useForm();
  const [timestamp, setTimestamp] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const now = new Date();
    setTimestamp(now.toLocaleString());
    toast.success("Application Submitted Successfully!");
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="final-container">
      <h2 className="final-title">🎉 Application Submitted!</h2>
      <p className="final-message">
        Your application was successfully submitted on:
      </p>
      <p className="final-timestamp">{timestamp}</p>

      <div className="final-buttons">
        <button onClick={handlePrint}>Print Receipt</button>
        <a href="/acknowledgment.pdf" download>
          <button>Download Acknowledgment</button>
        </a>
        <button onClick={handleHome}>Go to Home</button>
      </div>
    </div>
  );
};

export default FinalPage;
