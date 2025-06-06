import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../context/FormContext";
import "./AddressPage.css";

const AddressPage = () => {
  const navigate = useNavigate();
  const { formData, updateFormSection } = useForm();

  const [district, setDistrict] = useState(formData.address.district || "");
  const [taluk, setTaluk] = useState(formData.address.taluk || "");
  const [studentAddress, setStudentAddress] = useState(
    formData.address.studentAddress || ""
  );
  const [schoolName, setSchoolName] = useState(
    formData.address.schoolName || ""
  );
  const [schoolAddress, setSchoolAddress] = useState(
    formData.address.schoolAddress || ""
  );
  const [message, setMessage] = useState("");

  const handleNext = (e) => {
    e.preventDefault();

    if (
      !district ||
      !taluk ||
      !studentAddress ||
      !schoolName ||
      !schoolAddress
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    updateFormSection("address", {
      district,
      taluk,
      studentAddress,
      schoolName,
      schoolAddress,
    });
    navigate("/documents");
  };

  return (
    <div className="address-container">
      <h2 className="address-title">Step 3: Address & School Info</h2>
      <form className="address-form" onSubmit={handleNext}>
        <input
          type="text"
          placeholder="Enter District"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Taluk"
          value={taluk}
          onChange={(e) => setTaluk(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Student's Address"
          value={studentAddress}
          onChange={(e) => setStudentAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter School/College Name"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter School/College Address"
          value={schoolAddress}
          onChange={(e) => setSchoolAddress(e.target.value)}
        />
        <button type="submit">Next</button>
      </form>
      {message && <p className="address-message">{message}</p>}
    </div>
  );
};

export default AddressPage;
