const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Node.js Docker App running on EC2!");
  res.send("This line is to test CI/CD workflow!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
