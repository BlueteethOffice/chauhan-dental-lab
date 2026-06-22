const { db } = require("../firebase");

const getProducts = async (req, res) => {
  const snapshot = await db.collection("products").get();
  const products = [];

  snapshot.forEach(doc => {
    products.push({
      id: doc.id,
      ...doc.data()
    });
  });

  res.json(products);
};

const addProduct = async (req, res) => {
  const data = req.body;
  await db.collection("products").add(data);
  res.json({ message: "Product Added" });
};

module.exports = {
  getProducts,
  addProduct
};
