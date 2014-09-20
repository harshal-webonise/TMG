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

///dashboard
router.get('/dashboard', function(req, res) {
    res.render('dashboard', { title: 'admin dashboard ' });
});

module.exports = router;
