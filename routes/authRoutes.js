const express = require('express');
const router = express.Router();
const authControlller = require('../controllers/authController')

router.get('/signup', authControlller.signup_get)  //to fetch signup page ejs
router.post('/signup', authControlller.signup_post)  //to send signup form data to db
router.get('/login', authControlller.login_get)
router.post('/login', authControlller.login_post)

module.exports = router;
