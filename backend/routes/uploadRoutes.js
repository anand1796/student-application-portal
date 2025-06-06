const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { uploadFile } = require("../controllers/allControllers");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const unique = Date.now() + path.extname(file.originalname);
    cb(null, `${file.fieldname}-${unique}`);
  },
});

const upload = multer({ storage });
router.post("/file", upload.single("file"), uploadFile);

module.exports = router;
