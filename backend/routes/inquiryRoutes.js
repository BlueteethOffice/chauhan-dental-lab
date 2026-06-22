const express = require("express");
const router = express.Router();
const { getInquiries, addInquiry } = require("../controllers/inquiryController");
const authMiddleware = require("../middleware/authMiddleware");

// Anyone can add an inquiry (from contact form)
router.post("/", addInquiry);

// Only admin can view inquiries
router.get("/", authMiddleware, getInquiries);

module.exports = router;
