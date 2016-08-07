const express = require('express');
const util = require('util');

const config = require('../config');
const router = express.Router();
const dbConnection = require('../db-connection');

dbConnection
    .then(db => {
        const users = db.getCollection('users');


        /**
         * Get user info
         */
        router.get('/', function (req, res, next) {
            res.json(users.find({
                $loki: 1
            }));
        });


        /**
         * Create new user
         */
        router.post('/', function (req, res, next) {
            req.checkBody(config.userValidators);

            const errors = req.validationErrors();

            if (errors) {
                res.status(400).send('There have been validation errors: ' + util.inspect(errors));
                return;
            }

            const user = users.insert(req.body);

            res.json(user);
        });


        /**
         * Update user
         */
        router.put('/', function (req, res, next) {
            res.send('respond with a resource');
        });


        /**
         * Delete user
         */
        router.delete('/', function (req, res, next) {
            res.send('respond with a resource');
        });
    });


module.exports = router;
