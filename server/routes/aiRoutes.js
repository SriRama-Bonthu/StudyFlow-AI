const express = require("express");

const router = express.Router();

const protect = require(
  "../middleware/authMiddleware"
);

const {

  generateSummary,

  generateQuiz,

  chatWithPDF,

} = require(
  "../controllers/aiController"
);

router.post(
  "/summary",
  protect,
  generateSummary
);

router.post(

  "/quiz",

  protect,

  generateQuiz

);
router.post(

  "/chat-pdf",

  protect,

  chatWithPDF

);

module.exports = router;