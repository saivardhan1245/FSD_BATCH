const express = require("express");
const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  const user = req.body;

  res.status(201).json({
    message: "User created",
    user
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});