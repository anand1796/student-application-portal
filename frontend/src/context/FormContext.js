import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    aadhaar: {},
    education: {},
    address: {},
    documents: {},
  });

  const updateFormSection = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data,
      },
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormSection }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
