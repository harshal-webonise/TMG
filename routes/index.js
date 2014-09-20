var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

//forgot password
router.get('/forgot', function(req, res) {
    res.render('forgot', { title: 'Forgot password ' });
});

//forgot password
router.get('/user_kra', function(req, res) {
    res.render('userKra', { title: 'User KRA' });
});

///dashboard
router.get('/dashboard', function(req, res) {
    res.render('dashboard', { title: 'admin dashboard ' });
});

module.exports = router;
