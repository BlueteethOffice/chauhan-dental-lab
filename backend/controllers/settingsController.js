const { db } = require("../firebase");

const dashboardStats = async (req, res) => {
  const products = await db.collection("products").get();
  const gallery = await db.collection("gallery").get();
  const reviews = await db.collection("reviews").get();
  const inquiries = await db.collection("inquiries").get();

  res.json({
    products: products.size,
    gallery: gallery.size,
    reviews: reviews.size,
    inquiries: inquiries.size
  });
};

module.exports = {
  dashboardStats
};
