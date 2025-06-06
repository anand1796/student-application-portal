// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaIdCard, FaBookOpen, FaUpload } from "react-icons/fa";
// import "./HomePage.css";

// const HomePage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home-container">
//       <div className="left-column">
//         <h1>Student Application & Verification Portal</h1>
//         <p>
//           Apply seamlessly with Aadhaar, academic details, document uploads, and
//           instant fee payment. Your all-in-one solution for secure, verified
//           student submissions.
//         </p>
//         <button className="apply-btn" onClick={() => navigate("/login")}>
//           Apply Now
//         </button>
//       </div>

//       <div className="right-column">
//         <h2>How It Works</h2>

//         <div className="step">
//           <div className="step-icon">
//             <FaIdCard />
//           </div>
//           <div className="step-text">
//             <h3>Step 1: Aadhaar</h3>
//             <p>Verify your identity using Aadhaar number and card upload.</p>
//           </div>
//         </div>

//         <div className="step">
//           <div className="step-icon">
//             <FaBookOpen />
//           </div>
//           <div className="step-text">
//             <h3>Step 2: Education</h3>
//             <p>Enter marks and education details for eligibility check.</p>
//           </div>
//         </div>

//         <div className="step">
//           <div className="step-icon">
//             <FaUpload />
//           </div>
//           <div className="step-text">
//             <h3>Step 3: Documents</h3>
//             <p>Upload ID, photo, and academic proofs in secure format.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaIdCard,
  FaBookOpen,
  FaMapMarkedAlt,
  FaFileUpload,
  FaEye,
  FaMoneyCheckAlt,
  FaCheckCircle,
  FaHome,
  FaSignInAlt,
} from "react-icons/fa";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="left-column">
        <h1>Student Application & Verification Portal</h1>
        <p>
          Welcome to the official application portal designed to simplify and
          streamline the student verification process. Whether you're applying
          for scholarships, institution onboarding, or academic programs, this
          unified platform ensures a smooth experience from start to finish.
        </p>
        <p>
          Securely submit your Aadhaar, academic qualifications, and documents
          in a step-by-step guided flow. Pay fees online, track your submission,
          and download acknowledgment — all in one place.
        </p>
        <p>
          Start your journey today with confidence. Click "Apply Now" to begin
          your application.
        </p>

        <button className="apply-btn" onClick={() => navigate("/login")}>
          Apply Now
        </button>
      </div>

      <div className="right-column">
        <h2>How It Works</h2>

        <div className="step">
          <div className="step-icon">
            <FaHome />
          </div>
          <div className="step-text">
            <h3>Step 1: Homepage</h3>
            <p>Overview of the application process and portal introduction.</p>
          </div>
        </div>

        <div className="step">
          <div className="step-icon">
            <FaSignInAlt />
          </div>
          <div className="step-text">
            <h3>Step 2: Login / Sign-Up</h3>
            <p>Access portal using email/phone and OTP verification.</p>
          </div>
        </div>

        <div className="step">
          <div className="step-icon">
            <FaIdCard />
          </div>
          <div className="step-text">
            <h3>Step 3: Aadhaar Verification</h3>
            <p>Enter Aadhaar number and upload card for validation.</p>
          </div>
        </div>

        <div className="step">
          <div className="step-icon">
            <FaBookOpen />
          </div>
          <div className="step-text">
            <h3>Step 4: Education Details</h3>
            <p>Select board, class and input marks or upload marksheet.</p>
          </div>
        </div>

        <div className="step">
          <div className="step-icon">
            <FaMapMarkedAlt />
          </div>
          <div className="step-text">
            <h3>Step 5: Address & School Info</h3>
            <p>Provide your address and school/college information.</p>
          </div>
        </div>

        <div className="step">
          <div className="step-icon">
            <FaFileUpload />
          </div>
          <div className="step-text">
            <h3>Step 6: Document Upload</h3>
            <p>Upload photo, ID, Aadhaar, and academic documents.</p>
          </div>
        </div>

        <div className="step">
          <div className="step-icon">
            <FaEye />
          </div>
          <div className="step-text">
            <h3>Step 7: Review & Submit</h3>
            <p>Check and confirm all entered details before proceeding.</p>
          </div>
        </div>

        <div className="step">
          <div className="step-icon">
            <FaMoneyCheckAlt />
          </div>
          <div className="step-text">
            <h3>Step 8: Fee Payment</h3>
            <p>Pay the application fee and upload payment proof.</p>
          </div>
        </div>

        <div className="step">
          <div className="step-icon">
            <FaCheckCircle />
          </div>
          <div className="step-text">
            <h3>Step 9: Final Submission</h3>
            <p>Get confirmation with date/time and download receipt.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
