const express = require("express");
const User = require("../models/userModel");


const router = express.Router();

router.get("/user/register", (req, res) => {
    res.render("userViews/register");
});

router.post("/user/register", async(req, res) => {
    console.log(req.body);
    const newUser = await User.create({
        userName: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    console.log("user created");
    res.redirect("/");
});

router.get("/user/login", (req, res) => {
    res.render("userViews/login");
});

router.post("/user/logout", (req, res) => {
    res.send("logout route");
});

module.exports = router;