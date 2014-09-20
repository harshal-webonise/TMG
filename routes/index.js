var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
    res.render('login', { title: 'Express' });
});
//forgot password
router.get('/forgot', function(req, res) {
    res.render('forgot', { title: 'Express' });
});

module.exports = router;
