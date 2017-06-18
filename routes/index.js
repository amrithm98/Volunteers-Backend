var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Hi Volunteers!');
});

router.use('/volunteer-admin', require('./admin'))
router.use('/public', require('./public'))

module.exports = router;