const express = require("express");
const { getCurrentUser } = require("../controllers/user.controller");
const Authenticate = require("../middlewares/auth");
const router = express.Router();

// admin page route
// @access: Managers only
router.get("/me", Authenticate, getCurrentUser);

module.exports = router;
