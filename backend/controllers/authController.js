const jwt = require("jsonwebtoken");

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@chauhanlab.com" && password === "Admin@123") {
    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid Login" });
};

module.exports = {
  loginAdmin
};
