const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./urlRoutes");
const URL = require("./urlModel");
const cors = require("cors");

const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://0.0.0.0:27017/url-shortener");
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  try {
    const url = await URL.findOne({ shortId });
    if (!url) {
      return res.status(404).json({ message: "URL not found" });
    }
    url.visitHistory.push({ timestamp: Date.now() });
    await url.save();
    return res.redirect(url.redirectURL);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome to URL Shortener" });
});

app.get("*", (req, res) => {
  return res.status(404).json({ message: "Not found" });
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});