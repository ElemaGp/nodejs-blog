const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose'); 
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes');

//Express app
const app = express();

//connect to mongodb
const dbURI = "mongodb+srv://Gp:elema4@cluster0.xwc5kuv.mongodb.net/First-Monngodb-project?retryWrites=true&w=majority";
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

//middleware & static files
app.use(express.static('public')); //to make static files eg css and images public aka usable.
app.use(express.urlencoded({ extended: true })); //helps us access the name features inside the form tag eg name="body", name="snippet" etc






//General routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});  //The 'about' there means to display about.ejs. The curly braces is taking "title" as props in the about.ejs, and calling it "About" there. 
});

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

//blog routes
app.use('/blogs', blogRoutes);  //The '/blogs' means that that will be put first before any following url in the 'blogRoutes.js' file. The entire function is basically to show that every 'router' in blogRouter.js represents the 'app'. ie "router.get" means "app.get".



//404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});
