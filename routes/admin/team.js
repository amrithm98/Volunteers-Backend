var router = require('express').Router();
var debug = require('debug')('admin')
var models = require('../../models');
var constant = require('../../constant');
var fcm = require('../fcm');
var Promise = require('bluebird');
var _ = require('underscore');

router.put('/:id/add', (req, res, next) => {
    // Feed.create(req.body)
    //     .then(result => {
    //         return res.json(result);
    //     }).catch(error => {
    //         constant.cantCreateFeed.data = error;
    //         return res.status(400).json(constant.cantCreateFeed);
    //     })
});