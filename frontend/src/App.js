import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AadhaarPage from "./pages/AadhaarPage";
import EducationPage from "./pages/EducationPage";
import AddressPage from "./pages/AddressPage";
import DocumentPage from "./pages/DocumentPage";
import ReviewPage from "./pages/ReviewPage";
import PaymentPage from "./pages/PaymentPage";
import FinalPage from "./pages/FinalPage";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/aadhaar" element={<AadhaarPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/documents" element={<DocumentPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/final" element={<FinalPage />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
