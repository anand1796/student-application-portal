import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const sendOTP = (phone) => API.post("/otp/send", { phone });
export const uploadFile = (formData) => API.post("/upload/file", formData);
export const saveStudentData = (data) => API.post("/student/data", data);
