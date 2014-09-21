var express = require('express');
var router = express.Router();
var mysql = require("mysql");

var connection = mysql.createConnection({
    hostname: 'localhost',
    user: 'root',
    password: 'root',
    database: 'performance_management_db'
})

var mysql = require("mysql");

var connection = mysql.createConnection({
    hostname: 'localhost',
    user: 'tmg',
    password: 'tmg',
    database: 'performance_management_db'
});

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/login', function (req, res) {
    res.render('login', { title: 'Express' });
});
//forgot password
router.get('/forgot', function (req, res) {
    res.render('forgot', { title: 'Forgot password ' });
});

//forgot password
router.get('/user_kra', function (req, res) {
    connection.query('SELECT  kra_users.`id` AS kra_user_id,questions.`id` AS question_id ,questions.`title`,questions.`description` FROM kra_users LEFT JOIN kras ON (kras.`id`=kra_users.`kra_id`) LEFT JOIN kra_questions ON (kra_questions.`kra_id`=kras.`id`) LEFT JOIN questions ON (questions.`id`=kra_questions.`question_id`)', function (err, rows, fields) {
        if (rows.length == 0) {
            res.render('userKra', { title: "Error", data: "No data present", error: true})
        }
        res.render('userKra', { title: 'User KRA', data: rows});
    });
});

///dashboard
router.get('/dashboard', function (req, res) {
    res.render('dashboard', { title: 'admin dashboard ' });
});

///create KRA
router.get('/createkra', function (req, res) {
    var gradesQuery = "select * from grades";
    var technologiesQuery = "select * from technologies";
    var grades, technologies;
    connection.query(gradesQuery, function (err, rows) {
        if (!err) {
            grades = rows;
        }
    });
    connection.query(technologiesQuery, function (err, rows) {
        if (!err) {
            technologies = rows;
        }
    });
    res.render('createkra', { title: 'admin create KRA dashboard ', technologies: technologies, grades: grades});
});

///create KRA step 2
router.get('/createkra1', function (req, res) {
    var gradesQuery = "select * from grades";
    var technologiesQuery = "select * from technologies";
    connection.query(gradesQuery, function (err, rows) {
        if (!err) {
            console.log(rows);
        }
    });

    connection.query(technologiesQuery, function (err, rows) {
        if (!err) {
            console.log(rows);
        }
    });
    var technologies =
        res.render('createkra1', { title: 'admin create KRA dashboard ' });
});

router.post('/login', function (req, res) {
    var userName = req.body.userName;
    var password = req.body.password;
    var query = 'SELECT id FROM users WHERE users.username = "' + userName + '" AND users.password = "' + password + '"';
    connection.query(query, function (err, rows, fields) {
        if (err) {
            res.render('login');
        } else if (rows[0]) {
            req.session.userId = rows[0].id;
            res.redirect('dashboard');
        } else {
            res.render('login');
        }

    });
});

router.post('/questions', function (req, res) {
    console.log(req.body.name);
    console.log(req.body.technolgies);
    console.log(req.body.grades);
    if (req.body.length != 0) {
        var name = req.body.name;
        var technologyId = req.body.technologies;
        var gradeId = req.body.grades;
        var query = 'insert into kras (name,grade_id,tecnologies_id)values("' + name + '",' + gradeId + ',' + technologyId + ')';
        console.log(query);
        connection.query(query, function (err, rows) {
            console.log(err.fatal);
            if (!err.fatal) {
                console.log('Inserted successfully');
                res.render('createkra1', { title: 'admin create KRA dashboard ',kra_id:rows.insertId });
            }else{
                    res.redirect('createkra');
            }
        });
    }
});

module.exports = router;
