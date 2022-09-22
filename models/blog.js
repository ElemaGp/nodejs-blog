const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({ //The schema gives us the structure of the data
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});
//the model below is saved in "const Blog", and we then export that module so we can require it in app.js and use it to GET, POST, DELETE blog etc.
const Blog = mongoose.model('Blog', blogSchema); //The 'Blog' here in the bracket is called that because we named our collection in Mongodb "blogs", so we named it Blog here because it must be the singular of that "blogs" collection in the Mongodb. 
module.exports = Blog;