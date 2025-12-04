const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Node.js Docker App running on EC2!</h1>
    <p>This line is to test CI/CD workflow! 👌</p>
  `);
});

app.listen(3000, () => console.log("Server running on port 3000"));
