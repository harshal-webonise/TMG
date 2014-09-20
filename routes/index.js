var express = require('express');
var router = express.Router();
var mysql = require("mysql");

var connection = mysql.createConnection({
    hostname: 'localhost',
    user: 'root',
    password: 'root',
    database: 'performance_management_db'
})

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
    res.render('login', { title: 'Express' });
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

///create KRA
router.get('/createkra', function(req, res) {
    res.render('createkra', { title: 'admin create KRA dashboard ' });
});

///create KRA step 2
router.get('/createkra1', function(req, res) {
    var gradesQuery ="select * from grades";
    var technologiesQuery ="select * from technologies";
    connection.query(gradesQuery,function(err,rows){
        if(!err){
            con
        }
    });
    var technologies =
    res.render('createkra1', { title: 'admin create KRA dashboard ' });
});

router.post('/login',function(req,res){
 var userName=req.body.userName;
 var password=req.body.password;
    var query ='SELECT id FROM users WHERE users.username = "'+userName+'" AND users.password = "'+password+'"';
    connection.query(query, function(err, rows,fields){
    if(err){
        res.render('login');
    }else if(rows[0]){
        req.session.userId=rows[0].id;
        res.redirect('dashboard');
    }else{
        res.render('login');
    }

    });
});

router.post('/createKra',function(req,res){
    var
});

module.exports = router;
