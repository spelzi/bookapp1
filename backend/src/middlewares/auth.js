// check to see if there is a token and header
const JWT = require("jsonwebtoken");
require("dotenv").config();
const { SECRET } = process.env;

const Authenticate = (req, res, next) => {
  try {
    const { authToken } = req.cookies;
    const authPayload = JWT.verify(authToken, SECRET);
    req.user = authPayload;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = Authenticate;
