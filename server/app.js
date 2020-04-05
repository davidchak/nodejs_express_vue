const express = require("express");
const path = require("path");

// global
global.appRoot = path.resolve(__dirname);
global.mode = "production";

// init app
const app = express();

// middleware
app.use("/api", require("cors")());
app.use(express.json());
app.enable("trust proxy");

// routes
app.use("/", require("./routes"));

// handle ploduction
if (process.env.NODE_ENV === "production") {
  // static files
  app.use(express.static(__dirname + "/public/"));

  // handle spa
  app.use("/.*/", (req, res) => app.sendFile(__dirname + "/public/index.html"));
} else {
  global.mode = "developer";

  // static files
  app.use(express.static(__dirname + "/public/"));

  // handle spa
  app.use("/.*/", (req, res) => app.sendFile(__dirname + "/public/index.html"));
}

module.exports = app;
