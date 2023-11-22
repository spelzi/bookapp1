const express = require("express");
const protectedRoute = require("./routes/protected.router");
const authRoute = require("./routes/auth.router");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://bookapp-tau.vercel.app",
];

const corsOption = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
    "X-Auth-Token",
    "Authorization",
    "Accept-Encoding",
    "Connection",
    "Content-Length",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: allowedOrigins,
  preflightContinue: false,
};

app.use(cookieParser());
app.use(cors(corsOption));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/user/", protectedRoute);
app.use("/api/auth/", authRoute);

app.get("/", (req, res) => {
  res.send("server is live");
});

module.exports = app;
