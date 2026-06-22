const express = require("express");
const router = express.Router();
const { getProducts, addProduct } = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", getProducts);
router.post("/", authMiddleware, addProduct);

module.exports = router;
