const Blog = require('../models/blog');


//controls the fuction of the blogRoute get request to / (index.ejs).
const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })  //"sort...createtAt" helps us set the order we want it displayed. The "Blog" refers to the Blog model module we exported from models folder and required here.
    .then((result) => {
        res.render('blogs/index', { title: 'All Blogs', blogs: result }) //The "blogs/index" tells the view engine to look inside the blogs folder and then render the 'index' file there. The curly braces is sort of like taking props into the index.ejs file. Meaning anywhere you see "<%title%>" in the index.ejs or any Partial component nested in it, it refers to "All Blogs". And anywhere you see "blogs", it refers to the 'result' from the database.
    }) 
    .catch((err) => {
        console.log(err);
    })
}

//controls the fuction of the blogRoute's request to details.ejs.
const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
      .then(result => {
        res.render('blogs/details', { blog: result, title: 'Blog Details'}); //The "blogs/details" tells the view engine to look inside the blogs folder and then render the 'details' file there. The items inside the curly braces are being taken as props ie the items on the right will be called thename on the left, in the 'details' page.
      })
      .catch(err => {
        res.status(404).render('404', {title: 'Blog not found'}); //It also renders the 404.ejs file if you go to a non existent blog route eg. "/blogs/yiuhs"
      });
}

//controls the fuction of the blogRoute to display the form for creating new blog (create.ejs).
const blog_create_get = (req, res) => {
    res.render('blogs/create', {title: 'Create a new blog'}); //the curly braces is like taking props "title" into the create.ejs file. The "blogs/create" tells the view engine to look inside the blogs folder and then render the 'create' file there. 
}

//controls the fuction of the blogRoute to add a new blog when you click submit on the create form.
const blog_create_post = (req, res) => {
    const blog = new Blog(req.body); //"body" here refes to the entire contents of the blog from the create form (title, snippet, body). This is due to the "urlencoded" code i added previously.

    blog.save()
     .then((result) => {
        res.redirect('/blogs');
     })
     .catch((err) => {
        console.log(err);
     })
}

//controls the fuction of the blogRoute's request to delete blog.
const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' })
      })
      .catch(err => {
        console.log(err);
      })
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
} 