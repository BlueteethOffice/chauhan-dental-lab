const { db } = require("../firebase");

const addInquiry = async (req, res) => {
  await db.collection("inquiries").add({
    ...req.body,
    createdAt: new Date()
  });
  res.json({ message: "Inquiry Saved" });
};

const getInquiries = async (req, res) => {
  const snapshot = await db.collection("inquiries").get();
  const inquiries = [];

  snapshot.forEach(doc => {
    inquiries.push({
      id: doc.id,
      ...doc.data()
    });
  });

  res.json(inquiries);
};

module.exports = {
  addInquiry,
  getInquiries
};
