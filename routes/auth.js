var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.end('AUTHORIZED!');
});

router.get('/login', function(req, res, next) {
    res.render('./login');
});

router.post('/login', function(req, res, next) {
    res.render('./login', {
        name: req.body.name,
        pass: req.body.password,
        token: jwt.sign({ name: req.body.name }, 'asdasdjlksadnh')
    });
});

router.post('/logout', function(req, res, next) {
    var token = req.body.token;

    res.json({
        token: token
    });
});


module.exports = router;
