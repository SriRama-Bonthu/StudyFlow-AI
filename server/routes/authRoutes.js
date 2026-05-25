const express = require("express");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, (req, res) => {

  res.json({
    message: "Protected profile route accessed",
    user: req.user,
  });

});
module.exports = router;