const User = require("../models/user.model");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const { SECRET } = process.env;

// register user controllers function
const registerUser = async (req, res) => {
  const errors = validationResult(req);
  //check for possible password / email errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ statusCode: "400", errors: errors.array() });
  }
  try {
    const { firstName, lastName, email, password } = req.body;

    // check if email is already taken
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ error: "email is already taken" });
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    if (!user) {
      return res
        .status(400)
        .json({ statusCode: 400, errror: "something went wrong" });
    }

    res.status(201).json({
      message: "user created successfully",
      user: { id: user._id, email: user.email },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// user login controller function
const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ statusCode: "400", errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ statuseCode: 400, error: "Invalid credentials..." });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ statusCode: 400, error: "Invalid login credentials" });
    }

    const payload = {
      user: {
        id: user._id,
      },
    };
    const token = await jwt.sign(payload, SECRET, {
      expiresIn: 36000,
    });
    const jwtTokenOptions = {
      expires: 36000,
      maxAge: 59 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "lax",
      secure: true,
    };

    return res.cookie("authToken", token, jwtTokenOptions).json({
      statusCode: 200,
      message: "Logged in successfully",
    });
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

// logout user controller function
const logOut = (req, res) => {
  res.clearCookie("authToken");
  return res.json({ message: "Signout Successfully" });
};

module.exports = {
  loginUser,
  registerUser,
  logOut,
};
