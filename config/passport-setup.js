
// passport-setup.js
const passport = require('passport');
const googleStrategy = require('passport-google-oauth');
const keys = require('./keys')

passport.use(new googleStrategy({
    // options
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}), () => {
    // callback
});
