require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");
const settingsRoutes = require("./routes/settingsRoutes");

// Mount Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/settings", settingsRoutes);

// Health check endpoint
app.get("/", (req, res) => {
  res.send("Chauhan Dental Lab Backend API is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
