const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({extended:true}));
app.use (express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

//routes
const userRoutes = require("./routes/userRoutes");

app.use(userRoutes);

app.get("/", (req, res) => {
    res.render("home");
})

app.listen(3000, () => {
    console.log("server listening on port 3000");
})
