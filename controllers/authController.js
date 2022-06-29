const User = require('../models/users')

module.exports.signup_get = (req, res)=> {
    res.render('auth/signup', {title: 'Sign Up'})
}

module.exports.login_get = (req, res)=> {
    res.render('auth/login',{title: 'Login'})
}

module.exports.signup_post = async (req, res)=> {
    const {email, password} = req.body
    try{
        const user = await User.create({email, password})
        res.status(201).json(user);
    }
    catch{
        console.log("error occured, data not saved");
    }
    // create is equivalent to this code
    // const user = new User({email, password})
    // user.save()
}

module.exports.login_post = (req, res)=> {
    res.send('login')
}
