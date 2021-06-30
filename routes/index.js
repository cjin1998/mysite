var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/test", function(req, res, next) {
  res.render("test");
});

router.get("/multiplicity", function(req, res, next) {
  res.render("multi", { title: "multi" });
});

router.get("/musicandchill", function(req, res, next) {
  res.render("mc", { title: "multi" });
});

router.get("/visualtool", function(req, res, next) {
  res.render("tool", { title: "multi" });
});

router.get("/collide", function(req, res, next) {
  res.render("collide", { title: "multi" });
});

router.get("/better", function(req, res, next) {
  res.render("better", { title: "multi" });
});

router.get("/paper", function(req, res, next) {
  res.render("paper", { title: "multi" });
});

router.get("/info", function(req, res, next) {
  res.render("generic", { title: "Generic" });
});

router.get("/elements", function(req, res, next) {
  res.render("elements", { title: "Elements" });
});

module.exports = router;
