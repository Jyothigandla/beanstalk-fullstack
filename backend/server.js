const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Beanstalk Backend 🚀" });
});

// DO NOT use any other port
app.listen(8080, () => {
  console.log("Backend running on port 8080");
});

