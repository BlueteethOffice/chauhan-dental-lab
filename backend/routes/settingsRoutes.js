const express = require("express");
const router = express.Router();
const { dashboardStats } = require("../controllers/settingsController");
const authMiddleware = require("../middleware/authMiddleware");

// Only admin can view dashboard stats
router.get("/dashboard-stats", authMiddleware, dashboardStats);

module.exports = router;
