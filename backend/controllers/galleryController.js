const { db } = require("../firebase");

const getGallery = async (req, res) => {
  const snapshot = await db.collection("gallery").get();
  const gallery = [];

  snapshot.forEach(doc => {
    gallery.push({
      id: doc.id,
      ...doc.data()
    });
  });

  res.json(gallery);
};

const addGallery = async (req, res) => {
  await db.collection("gallery").add(req.body);
  res.json({ message: "Gallery Added" });
};

module.exports = {
  getGallery,
  addGallery
};
