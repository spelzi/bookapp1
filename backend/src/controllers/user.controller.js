const User = require("../models/user.model");

// visit admin page
const getCurrentUser = async (req, res) => {
  const userId = req.user.user.id;

  try {
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }

    return res.status(200).json({ statusCode: 200, message: "success", user });
  } catch (error) {
    res.staus(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getCurrentUser,
};
