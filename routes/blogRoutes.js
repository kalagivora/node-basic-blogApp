const express = require('express');
const router = express.Router();
const Blog = require('../models/blogs');

router.get('/create',(req,res)=>{
    res.render('blog/create', {title: 'create blog'})
})

router.get('/', (req,res)=>{
    Blog.find().sort({createdAt: -1})
        .then((result)=>{
            res.render('index', {title: 'All blogs', blogs: result})
        }).catch((err)=>{
            console.log(err);
        })
})

router.get('/:id', (req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
        .then((result)=>{
            res.render('blog/details', {title: 'Blog detail', blog: result});
        }).catch((err)=>{
            res.status(404).render('404', { title: '404' })
        })
})

router.delete('/:id', (req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result =>{
            // res.redirect('/blogs');  here we can't redirect like this bcz we are sending ajax request from browser (i.e. in details fetch). in this type of req we have to send json or text data to browser
            res.json({redirect: '/blogs'})
        }).catch(err=>{
            alert(err);
        })
})

//fires on submit form
router.post('/', (req, res)=>{
    // we are getting access to this body because we are using express.urlencoded middleware
    // console.log(req.body);
    //1. creating new instance of Blog
    // const blog = new Blog({
    //     title: req.body.title,
    //     snippet: req.body.snippet,
    //     body: req.body.body
    // })
    //OR bcz it's similar 
    const blog = new Blog(req.body)
    //2. save 
    blog.save().then(()=>{
        res.redirect('/blogs')
    }).catch((err)=>{
        alert(err)
        res.redirect('/blogs')
    });
})

module.exports = router
