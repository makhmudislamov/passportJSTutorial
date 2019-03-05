const express = require('express');
const router = express.Router();
const passport = require('passport');

// auth login 
router.get('/login', (req, res) => {
    res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out')
});

// auth with google
router.get('/google', passport.authenticate('google', {
    // retrieving information - profile
    scope: ['profile']
}));

// callback route to redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('you reached callback uri')
});

module.exports = router;