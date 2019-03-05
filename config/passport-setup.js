
// passport-setup.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user');

passport.use(
    new GoogleStrategy({
        // options
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        // callback
        console.log('callback func is working')
        console.log(profile)
        new User({
            username: profile.displayName,
            googleId: profile.id
        // saving the user to db - asynch task
        }).save()
        .then((newUser) => {
            console.log('new user created:' + newUser);
        });
    })

);
