var express = require('express');
var router = express.Router();
var models = require('../../models');
var debug = require('debug')('admin');
var _ = require('underscore');
constant = require('../../constant');
var superAdminStatus = 10;

module.exports = router;