module.exports.signup_get = (req, res)=> {
    res.render('auth/signup', {title: 'Sign Up'})
}

module.exports.login_get = (req, res)=> {
    res.render('auth/login',{title: 'Login'})
}

module.exports.signup_post = (req, res)=> {
    res.send('signup')
}

module.exports.login_post = (req, res)=> {
    res.send('login')
}
