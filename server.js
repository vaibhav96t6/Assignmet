const https = require("https");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 4000;

app.get("/", function (req,res) {
  console.log("severer");
  res.send("<h1>Error</h1>");
});

app.listen(port);
