import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../context/FormContext";
import "./DocumentsPage.css";

const DocumentPage = () => {
  const navigate = useNavigate();
  const { formData, updateFormSection } = useForm();

  const [photo, setPhoto] = useState(formData.documents.photo || null);
  const [signature, setSignature] = useState(
    formData.documents.signature || null
  );
  const [marksheet, setMarksheet] = useState(
    formData.documents.marksheet || null
  );
  const [message, setMessage] = useState("");

  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (!photo || !signature || !marksheet) {
      setMessage("Please upload all required documents.");
      return;
    }

    updateFormSection("documents", {
      photo,
      signature,
      marksheet,
    });

    navigate("/review");
  };

  return (
    <div className="document-container">
      <h2 className="document-title">Step 4: Upload Documents</h2>
      <form className="document-form" onSubmit={handleNext}>
        <label>Upload Passport Size Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, setPhoto)}
        />

        <label>Upload Signature</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, setSignature)}
        />

        <label>Upload Marksheet</label>
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(e) => handleFileChange(e, setMarksheet)}
        />

        <button type="submit">Next</button>
      </form>
      {message && <p className="document-message">{message}</p>}
    </div>
  );
};

export default DocumentPage;
