var express = require('express');
var router = express.Router();
var models = require('../../models');
var debug = require('debug')('admin');
var _ = require('underscore');
constant = require('../../constant');
var superAdminStatus = 10;

router.use('/auth', require('./auth'));
router.use('/event', require('./event'));


router.get('/', (req, res, next) => {
    debug(req.query)
    res.send({ "success": true, "api": "admin" }).status(200);
});

module.exports = router;