const express = require('express');
const router = express.Router();

const authCheck = (req, res, next) => {
  // check if a user is logged in
  if(!req.user){
    // if not logged in redirect
    res.redirect('/auth/login');
  } else {
    // if logged in
    next();
  }
};

router.get('/', authCheck, (req, res) => {
  res.render('show-profile', { user: req.user})
});

module.exports = router;
