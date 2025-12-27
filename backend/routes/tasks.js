const express = require("express");
const router = express.Router();

const tasks = [
  { id: 1, title: "Learn Docker" },
  { id: 2, title: "Build Fullstack App" }
];

router.get("/", (req, res) => {
  res.json(tasks);
});

module.exports = router;