// src/pages/LoginPage.jsx
import React, { useState } from "react";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css";

const LoginPage = () => {
  const [loginMethod, setLoginMethod] = useState("password");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {},
          "expired-callback": () => {
            toast.error("reCAPTCHA expired. Please try again.");
          },
        }
      );
    }
  };

  const handleSendOtp = async () => {
    if (!identifier.match(/^\+91\d{10}$/)) {
      toast.error("Enter a valid phone number with +91 prefix");
      return;
    }

    setupRecaptcha();
    setLoading(true);

    try {
      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, identifier, appVerifier);
      setConfirmationResult(result);
      setOtpSent(true);
      toast.success("OTP sent successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send OTP");
    }

    setLoading(false);
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      await confirmationResult.confirm(otp);
      toast.success("OTP verified. Login successful.");
      window.location.href = "/aadhaar";
    } catch (error) {
      console.error(error);
      toast.error("Invalid OTP");
    }
    setLoading(false);
  };

  const handlePasswordLogin = async () => {
    if (!identifier || !password) {
      toast.error("Please enter email and password");
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, identifier, password);
      toast.success("Login successful");
      window.location.href = "/aadhaar";
    } catch (error) {
      console.error("Login failed:", error.message);
      if (error.code === "auth/user-not-found") {
        toast.error("User not found");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password");
      } else {
        toast.error("Login failed: " + error.message);
      }
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <div className="toggle-buttons">
          <button
            className={loginMethod === "password" ? "active" : ""}
            onClick={() => setLoginMethod("password")}
          >
            Email Login
          </button>
          <button
            className={loginMethod === "otp" ? "active" : ""}
            onClick={() => setLoginMethod("otp")}
          >
            Phone OTP Login
          </button>
        </div>

        <div className="input-field">
          <label>
            {loginMethod === "password" ? "Email" : "Phone (+91...)"}
          </label>
          <input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder={
              loginMethod === "password" ? "Enter your email" : "+91XXXXXXXXXX"
            }
          />
        </div>

        {loginMethod === "password" && (
          <>
            <div className="input-field">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <button
              className="login-btn"
              onClick={handlePasswordLogin}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </>
        )}

        {loginMethod === "otp" && (
          <>
            {!otpSent ? (
              <button
                className="login-btn"
                onClick={handleSendOtp}
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
            ) : (
              <>
                <div className="input-field">
                  <label>OTP</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 6-digit OTP"
                  />
                </div>
                <button
                  className="login-btn"
                  onClick={handleVerifyOtp}
                  disabled={loading}
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
              </>
            )}
          </>
        )}

        <div className="footer-text">
          Don’t have an account? <a href="/register">Register</a> <br />
          <a href="/forgot">Forgot Password?</a>
        </div>
      </div>
      <div id="recaptcha-container"></div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;

// import React, { useState } from "react";
// import {
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../firebase";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./LoginPage.css";

// const LoginPage = () => {
//   const [loginMethod, setLoginMethod] = useState("password");
//   const [identifier, setIdentifier] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const setupRecaptcha = () => {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         auth,
//         "recaptcha-container",
//         {
//           size: "invisible",
//           callback: (response) => {
//             // reCAPTCHA solved.
//           },
//           "expired-callback": () => {
//             toast.error("reCAPTCHA expired. Please try again.");
//           },
//         }
//       );
//     }
//   };

//   const handleSendOtp = async () => {
//     if (!identifier.match(/^\+91\d{10}$/)) {
//       toast.error("Enter a valid phone number with +91 prefix");
//       return;
//     }

//     setupRecaptcha();
//     setLoading(true);
//     try {
//       const appVerifier = window.recaptchaVerifier;
//       const result = await signInWithPhoneNumber(auth, identifier, appVerifier);
//       setConfirmationResult(result);
//       setOtpSent(true);
//       toast.success("OTP sent successfully");
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to send OTP");
//     }
//     setLoading(false);
//   };

//   const handleVerifyOtp = async () => {
//     setLoading(true);
//     try {
//       await confirmationResult.confirm(otp);
//       toast.success("OTP verified. Login successful!");
//       window.location.href = "/aadhaar-verification";
//     } catch (error) {
//       console.error(error);
//       toast.error("Invalid OTP. Please try again.");
//     }
//     setLoading(false);
//   };

//   const handlePasswordLogin = async () => {
//     if (!identifier || !password) {
//       toast.error("Please enter both email and password");
//       return;
//     }

//     setLoading(true);
//     try {
//       await signInWithEmailAndPassword(auth, identifier, password);
//       toast.success("Login successful!");
//       window.location.href = "/aadhaar-verification";
//     } catch (error) {
//       console.error(error);
//       toast.error("Login failed. Check your credentials.");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <div className="toggle-buttons">
//           <button
//             className={loginMethod === "password" ? "active" : ""}
//             onClick={() => {
//               setLoginMethod("password");
//               setOtpSent(false);
//               setOtp("");
//             }}
//           >
//             Email Login
//           </button>
//           <button
//             className={loginMethod === "otp" ? "active" : ""}
//             onClick={() => {
//               setLoginMethod("otp");
//               setPassword("");
//             }}
//           >
//             Phone OTP Login
//           </button>
//         </div>

//         <div className="input-field">
//           <label>
//             {loginMethod === "password" ? "Email" : "Phone (+91...)"}
//           </label>
//           <input
//             type="text"
//             value={identifier}
//             onChange={(e) => setIdentifier(e.target.value)}
//             placeholder={
//               loginMethod === "password" ? "Enter your email" : "+91XXXXXXXXXX"
//             }
//           />
//         </div>

//         {loginMethod === "password" && (
//           <>
//             <div className="input-field">
//               <label>Password</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//               />
//             </div>
//             <button
//               className="login-btn"
//               onClick={handlePasswordLogin}
//               disabled={loading}
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </>
//         )}

//         {loginMethod === "otp" && (
//           <>
//             {!otpSent ? (
//               <button
//                 className="login-btn"
//                 onClick={handleSendOtp}
//                 disabled={loading}
//               >
//                 {loading ? "Sending OTP..." : "Send OTP"}
//               </button>
//             ) : (
//               <>
//                 <div className="input-field">
//                   <label>OTP</label>
//                   <input
//                     type="text"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                     placeholder="Enter 6-digit OTP"
//                   />
//                 </div>
//                 <button
//                   className="login-btn"
//                   onClick={handleVerifyOtp}
//                   disabled={loading}
//                 >
//                   {loading ? "Verifying..." : "Verify OTP"}
//                 </button>
//               </>
//             )}
//           </>
//         )}

//         <div className="footer-text">
//           Don’t have an account? <a href="/register">Register</a> <br />
//           <a href="/forgot">Forgot Password?</a>
//         </div>
//       </div>

//       <div id="recaptcha-container"></div>
//       <ToastContainer position="top-center" />
//     </div>
//   );
// };

// export default LoginPage;
