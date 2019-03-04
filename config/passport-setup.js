
// passport-setup.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth');
const keys = require('./keys')

passport.use(
    new GoogleStrategy({
        // options
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, () => {
        // callback
    })

);
