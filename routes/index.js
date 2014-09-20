var express = require('express');
var router = express.Router();

var mysql = require("mysql");

var connection = mysql.createConnection({
    hostname: 'localhost',
    user: 'tmg',
    password: 'tmg',
    database: 'performance_management_db'
});

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
    connection.query('SELECT  kra_users.`id` AS kra_user_id,questions.`id` AS question_id ,questions.`title`,questions.`description` FROM kra_users LEFT JOIN kras ON (kras.`id`=kra_users.`kra_id`) LEFT JOIN kra_questions ON (kra_questions.`kra_id`=kras.`id`) LEFT JOIN questions ON (questions.`id`=kra_questions.`question_id`)',function(err,rows,fields) {
        if(rows.length == 0) {
            res.render('userKra', { title: "Error", data: "No data present", error: true})
        }
        res.render('userKra', { title: 'User KRA',data:rows});
    });
});

///dashboard
router.get('/dashboard', function(req, res) {
    res.render('dashboard', { title: 'admin dashboard ' });
});

///create KRA
router.get('/createkra', function(req, res) {
    res.render('createkra', { title: 'admin create KRA dashboard ' });
});

///create KRA step 2
router.get('/createkra1', function(req, res) {
    res.render('createkra1', { title: 'admin create KRA dashboard ' });
});

module.exports = router;
