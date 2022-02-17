const express = require("express");
const path = require("path");
const session = require("express-session");

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(session({
    secret: "another forum",
    resave: false,
    saveUninitialized: true
}));

//routes
const userRoutes = require("./routes/userRoutes");

app.use(userRoutes);

app.get("/", (req, res) => {
    if(req.session.views) {
        req.session.views++;
        console.log(req.session.views);
    } else {
        req.session.views = 1;
    }
    res.render("home");
});

app.listen(3000, () => {
    console.log("server listening on port 3000");
});
