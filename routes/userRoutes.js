const express = require("express");

const router = express.Router();

router.get("/user/register", (req, res) => {
    res.render("userViews/register");
});

router.post("/user/register", (req, res) => {
    res.send("register post route");
});

router.get("/user/login", (req, res) => {
    res.render("userViews/login");
});

router.post("/user/logout", (req, res) => {
    res.send("logout route");
});

module.exports = router;