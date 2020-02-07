var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/about/:id", function(req, res, next) {
  res.render("about", { output: req.params.id });
});

router.post("/about/submit", function(req, res, next) {
  var id = req.body.id;
  if (id === "5") {
    res.redirect("/about/" + id);
  } else {
    res.redirect("/");
  }
});

module.exports = router;
