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
connection.query('select * from users where username=admin and password=admin',function(error,row,fields){
if(error){
    console.log('error in query');
}
    console.log(fields);
});
    if(verified){
        req.session.username = username;
    }
    res.send(test);
});

module.exports = router;
