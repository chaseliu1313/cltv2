var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("fetching all blogs");
});

router.post("/", (req, res) => {
  res.send("add a new blog");
});

router.put("/:blogId", (req, res) => {
  res.send("update a blog");
});

router.delete("/blogId", (req, res) => {
  res.send("delete a blog");
});

module.exports = router;
