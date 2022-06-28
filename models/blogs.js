const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
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

//create model 
const Blog = mongoose.model('Blog', blogSchema); //first arg should be singular of our collection name

module.exports = Blog;
