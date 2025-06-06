// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./ReviewPage.css";

// export default function ReviewPage() {
//   const navigate = useNavigate();

//   const handleFinalSubmit = () => {
//     // TODO: Final submission logic here (e.g., send all data to backend)
//     toast.success("Application submitted successfully!");
//     setTimeout(() => navigate("/success"), 1500);
//   };

//   // TODO: Replace with actual data from state/context/localStorage
//   const studentData = {
//     aadhaar: "123456789012",
//     board: "CBSE",
//     standard: "10th",
//     marks: "85%",
//     district: "Some District",
//     taluk: "Some Taluk",
//     studentAddress: "123, Student Nagar, City",
//     schoolName: "XYZ High School",
//     schoolAddress: "456, School Road, City",
//   };

//   return (
//     <div className="review-container">
//       <h2 className="review-title">Review & Submit</h2>

//       <div className="review-section">
//         <h3>Personal Info</h3>
//         <p>
//           <strong>Aadhaar:</strong> {studentData.aadhaar}
//         </p>

//         <h3>Education Details</h3>
//         <p>
//           <strong>Board:</strong> {studentData.board}
//         </p>
//         <p>
//           <strong>Class:</strong> {studentData.standard}
//         </p>
//         <p>
//           <strong>Marks:</strong> {studentData.marks}
//         </p>

//         <h3>Address & School Info</h3>
//         <p>
//           <strong>District:</strong> {studentData.district}
//         </p>
//         <p>
//           <strong>Taluk:</strong> {studentData.taluk}
//         </p>
//         <p>
//           <strong>Student Address:</strong> {studentData.studentAddress}
//         </p>
//         <p>
//           <strong>School Name:</strong> {studentData.schoolName}
//         </p>
//         <p>
//           <strong>School Address:</strong> {studentData.schoolAddress}
//         </p>
//       </div>

//       <button className="submit-btn" onClick={handleFinalSubmit}>
//         Submit and Proceed
//       </button>

//       <ToastContainer />
//     </div>
//   );
// }

import React from "react";
import { useForm } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ReviewPage.css";

const ReviewPage = () => {
  const { formData } = useForm();
  const navigate = useNavigate();

  const { aadhaar, education, address, documents } = formData;

  const handleSubmit = () => {
    // Show success toast
    toast.success("Review submitted successfully! Redirecting to payment...", {
      position: "top-center",
      autoClose: 2000,
    });

    // Redirect after short delay
    setTimeout(() => {
      navigate("/payment");
    }, 2000);
  };

  return (
    <div className="review-container">
      <h2 className="review-title">Step 5: Review Your Application</h2>

      <div className="review-section">
        <h3>Aadhaar Details</h3>
        <p>
          <strong>Aadhaar Number:</strong> {aadhaar.number}
        </p>
      </div>

      <div className="review-section">
        <h3>Educational Details</h3>
        <p>
          <strong>Board:</strong> {education.board}
        </p>
        <p>
          <strong>Class:</strong> {education.className}
        </p>
        <p>
          <strong>Marks:</strong> {education.marks}
        </p>
      </div>

      <div className="review-section">
        <h3>Address & School Info</h3>
        <p>
          <strong>District:</strong> {address.district}
        </p>
        <p>
          <strong>Taluk:</strong> {address.taluk}
        </p>
        <p>
          <strong>Student Address:</strong> {address.studentAddress}
        </p>
        <p>
          <strong>School Name:</strong> {address.schoolName}
        </p>
        <p>
          <strong>School Address:</strong> {address.schoolAddress}
        </p>
      </div>

      <div className="review-section">
        <h3>Uploaded Documents</h3>
        <p>
          <strong>Photo:</strong> {documents.photo?.name || "Not uploaded"}
        </p>
        <p>
          <strong>Signature:</strong>{" "}
          {documents.signature?.name || "Not uploaded"}
        </p>
        <p>
          <strong>Marksheet:</strong>{" "}
          {documents.marksheet?.name || "Not uploaded"}
        </p>
      </div>

      <div className="review-buttons">
        <button onClick={handleSubmit}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default ReviewPage;
