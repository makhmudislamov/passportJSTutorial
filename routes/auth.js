const router = require('express').Router();
const passport = require('passport');

// auth login 
router.get('/login', (req, res) => {
    res.render('login', {user: req.user});
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    req.logout(); // destroys cookie saved on browser
    res.redirect('/');
});

// auth with google
router.get('/google', passport.authenticate('google', {
    // retrieving information - profile
    scope: ['profile']
}));

// callback route to redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // accessing currently logged in user  
    // res.send(req.user)
    res.redirect('/profile')
});

module.exports = router;