var router = require('express').Router();
var debug = require('debug')('admin')
var models = require('../../models');
var constant = require('../../constant');
var fcm = require('../fcm');
var Promise = require('bluebird');

/**
 * @api {put} /volunteer-admin/feed/new New Feed
 * @apiDescription New Feed
 * @apiGroup Admin
 * @apiParam {string} desc Feed Content
 * @apiParam {string} adminUid Admin UID
 * @apiParam {string} eventId Event's ID
 * @apiSuccessExample success
 * {
  "id": 8,
  "name": "New College",
  "updatedAt": "2017-03-11T18:28:33.000Z",
  "createdAt": "2017-03-11T18:28:33.000Z"
}

    @apiErrorExample error
    {"code":23,"message":"Could not Create Feed"}
 */

router.put('/new', (req, res, next) => {
    models.feed.create(req.body)
        .then(result => {
            return res.json(result);
        }).catch(error => {
            constant.cantCreateFeed.data = error;
            return res.status(400).json(constant.cantCreateFeed);
        })
});

module.exports = router;