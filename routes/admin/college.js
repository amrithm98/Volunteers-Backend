var router = require('express').Router();
var debug = require('debug')('admin')
var models = require('../../models');
var constant = require('../../constant');
var fcm = require('../fcm');
var Promise = require('bluebird');

/**
 * @api {put} /volunteer-admin/college/ add college
 * @apiDescription add a new college to server
 * @apiGroup Admin
 * @apiParam {string} name college name
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

router.put('/', (req, res, next) => {
    models.college.create(req.body)
        .then(result => {
            return res.json(result);
        }).catch(error => {
            constant.cantPutCollege.data = error;
            return res.status(400).json(constant.cantPutCollege);
        })
});

module.exports = router;