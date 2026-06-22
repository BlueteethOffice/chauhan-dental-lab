const { db } = require("../firebase");

const getReviews = async (req, res) => {
  const snapshot = await db.collection("reviews").get();
  const reviews = [];

  snapshot.forEach(doc => {
    reviews.push({
      id: doc.id,
      ...doc.data()
    });
  });

  res.json(reviews);
};

const addReview = async (req, res) => {
  await db.collection("reviews").add(req.body);
  res.json({ message: "Review Added" });
};

module.exports = {
  getReviews,
  addReview
};
