const express = require("express");
const { validationResult, check } = require("express-validator");
const {
  loginUser,
  registerUser,
  logOut,
} = require("../controllers/auth.controller");
const { checkUserRoleData } = require("../middlewares/datavalidation");
const router = express.Router();

// user registration route
//data validation with express validator
router.post(
  "/register",

  [
    check("email", "please enter a valid email").isEmail(),
    check("password", "A valid password is required").exists(),
  ],
  checkUserRoleData,
  registerUser
);

// user login route
//data validation with express validator
router.post(
  "/login",
  [
    check("email", "please enter a valid email").isEmail(),
    check("password", "A valid password is required").exists(),
  ],
  loginUser
);

//user logout route
router.get("/logout", logOut);

module.exports = router;
