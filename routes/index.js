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
    res.render('forgot', { title: 'Express' });
});

router.post('/login',function(req,res){
 var userName=req.body.userName;
 var password=req.body.password;
    var query ='SELECT id FROM users WHERE users.username = "'+userName+'" AND users.password = "'+password+'"';
    connection.query(query, function(err, rows,fields){
    if(err){
        res.render('login', {users : rows});

    }else{
        req.session.userId=rows[0].id;
        res.render('dashboard', {users : rows});
    }

    });
})

module.exports = router;
