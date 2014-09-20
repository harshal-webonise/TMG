var express = require('express');
var router = express.Router();


var mysql = require("mysql");

var connection = mysql.createConnection({
    hostname: 'localhost',
    user: 'tmg',
    password: 'tmg',
    database: 'node-tmg'
});

/* GET home page. */
router.get('/', function(req, res) {
  connection.query('SELECT * FROM tmg',function(err,rows,fields)     {
        console.log(rows);
        console.log("-------------------------");
        for (var i in rows) {
            console.log('Data: ', rows[i].name);
        }
        console.log("-------------------------");
        res.render('index', { title: 'Express',data:rows});
    });
});

module.exports = router;
