const express = require("express");
const router = express.Router();
const { getGallery, addGallery } = require("../controllers/galleryController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", getGallery);
router.post("/", authMiddleware, addGallery);

module.exports = router;
