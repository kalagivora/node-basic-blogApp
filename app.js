//creating server using express

const express = require('express');
const mongoose = require('mongoose');
const blogRouters = require('./routes/blogRoutes')

//set up app 
const app = express()

//connect to mongodb
const dbUrl = 'mongodb://127.0.0.1:27017/node-tut'
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Connected to database!");
    //listen to requests
    app.listen(3000)   //by default localhost
  }).catch(() => {
    console.log("Connection failed!");
  }
);

//register view engine
app.set('view engine', 'ejs')
//by default ejs is gonna look for files in views folder but if we want to choose diff folder then
//app.set('views', 'xyz')


//middleware & static files
app.use(express.static('public'))  //arg is folder name

//middleware to encode data coming from req body
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res)=> {
    res.redirect('/blogs')
    res.render('index', {title: 'home', blogs: []})                         // to render ejs page
    // res.sendFile('./views/index.html', {root: __dirname})       //this automatically sets header and status code according to data 
})

app.get('/about', (req,res)=> {
    // res.sendFile('./views/about.html', {root: __dirname})
    res.render('about', {title: 'about'})
})

app.get('/about-me', (req,res)=> {
    res.redirect('/about')
})

app.use('/blogs', blogRouters)

//will exe for every req if match not found till this point (top to bottom) position of this is imp
app.use((req,res)=> {
    // res.status(404).sendFile('./views/404.html', {root: __dirname}) 
    res.status(404).render('404', { title: '404' })
})   //middleware
