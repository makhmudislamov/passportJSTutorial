
// passport-setup.js
const passport = require('passport');
const googleStrategy = require('passport-google-oauth');

passport.use(new googleStrategy({
    // options
    clientID: '240786198817-r6qsasnisl473bnrvlttn0fvm4nhovvq.apps.googleusercontent.com',
    clientSecret: '20ki6SjqG6lo4iowsgkrEB_g'
}), () => {
    // callback
});
