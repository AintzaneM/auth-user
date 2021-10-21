const router = require("express").Router();


router.get("/signup", (req, res, next) => {
    res.send("this is signup")
  //res.render("index");
});

module.exports = router;