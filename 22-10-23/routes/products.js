const express = require("express");
const router = express.Router();

router.get("/:category", (req, res) => {
  res.send(`products catogary ${req.params.category}`);
});

router.get("/", (req, res) => {
  res.send(req.data);
});

router.post("/", (req, res) => {
  res.send("post request");
});

module.exports = router;
