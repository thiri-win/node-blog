const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoute = require("./routes/blogRoute");

const app = express();

//connect to mongodb
const dbUrl = 'mongodb+srv://thiri:thiriwin12345@blog.9mprpnt.mongodb.net/?retryWrites=true&w=majority'

// mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect("mongodb://localhost:27017/blog")
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.redirect("/blogs");
})
app.get("/about", (req, res) => {
    // res.sendFile("./views/about.html", {root: __dirname});
    res.render("about", {title: "About"});
})

app.use("/blogs/", blogRoute);

//404 page
app.use((req, res) => {
    // res.status(404).sendFile("./views/404.html", {root: __dirname})
    res.status(404).render("404", {title: "404"});
})
