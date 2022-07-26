const Blog = require("./../models/blog");

const index = (req, res) => {

    Blog.find()
        .sort({createdAt: -1})
        .then(result => res.render("index", {title: "Home", blogs: result}))
        .then(err => console.log(err));

    // res.sendFile("./views/index.html", {root: __dirname});
    // res.render("index", {title: "Home", blogs});
}

const create = (req, res) => {
    res.render("create", {title: "Blog Create"});
}

const store = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then(result => res.redirect("/blogs"))
        .catch(err => console.log(err));
}

const show = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => res.render("show", {title: "Show", blog: result}))
        .catch(err => {
            res.render("404", {title: "Blog Not Found"});
            console.log(err);
        })
}

const destory = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => res.json({redirect: "/blogs"}))
        .catch(err => console.log(err));
}

module.exports = {index, create, store, show, destory}