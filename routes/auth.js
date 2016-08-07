const express = require('express');
const jwt = require('jsonwebtoken');
const jwtMidlware = require('express-jwt');
const router = express.Router();

router.post('/login', function(req, res, next) {
    res.json({
        token: jwt.sign({ name: req.body.name }, 'yep')
    });
});

router.post('/logout', jwtMidlware({secret: 'yep', requestProperty: 'token'}), function(req, res, next) {
    const token = req.headers.authorization.split(' ')[1];
    const userInfo = jwt.verify(token, 'yep');

    res.json({
        user: userInfo
    });
});


module.exports = router;
