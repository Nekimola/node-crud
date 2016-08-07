"use strict";

const loki = require('lokijs');

module.exports = new Promise(resolve => {
    const db = new loki('loki.json', {
        autosave: true,
        autosaveInterval: 5000,
        autoload: true,

        autoloadCallback: () => {
            if (db.getCollection('users') === null ) {
                db.addCollection('users', {
                    unique: ['email']
                });
            }

            resolve(db);
        }
    });
});