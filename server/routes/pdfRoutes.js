const express = require("express");

const multer = require("multer");

const router = express.Router();

const protect = require(
  "../middleware/authMiddleware"
);

const {

  uploadPDF,

} = require(
  "../controllers/pdfController"
);
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});
router.post(

  "/upload",

  protect,

  upload.single("pdf"),

  uploadPDF

);
module.exports = router;