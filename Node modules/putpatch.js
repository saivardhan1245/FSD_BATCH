const express = require("express");
const app = express();

app.use(express.json());

let user = {
  id: 1,
  name: "John",
  age: 25
};

// PUT - Replace entire resource
app.put("/users/1", (req, res) => {
  user = req.body;

  res.json({
    message: "User replaced",
    user
  });
});

// PATCH - Update specific fields
app.patch("/users/1", (req, res) => {
  user = { ...user, ...req.body };

  res.json({
    message: "User updated",
    user
  });
});
app.get("/users/1", (req, res) => {
  res.json(user);
});
console.log("RUNNING PUTPATCH.JS");
app.listen(3000, () => {
  console.log("Server running on port 3000");
});