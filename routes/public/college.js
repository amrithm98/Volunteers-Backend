var router = require('express').Router();
var debug = require('debug')('admin')
var models = require('../../models');
var constant = require('../../constant');
var fcm = require('../fcm');
var Promise = require('bluebird');
var College = models.college;
/**
 * @api {get} /public/college/ Get All colleges
 * @apiGroup Public
 * @apiSuccessExample success
 * {
  "id": 8,
  "name": "New College",
  "updatedAt": "2017-03-11T18:28:33.000Z",
  "createdAt": "2017-03-11T18:28:33.000Z"
}

    @apiErrorExample error
    {"code":22,"message":"Could not put college"}
 */

router.get('/', (req, res, next) => {
    College.findAll()
        .then(result => {
            return res.json(result);
        }).catch(error => {
            constant.cantFetchCollege = error;
            return res.status(400).json(constant.cantFetchCollege);
        })
});

module.exports = router;