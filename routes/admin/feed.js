var router = require('express').Router();
var debug = require('debug')('admin')
var models = require('../../models');
var constant = require('../../constant');
var fcm = require('../fcm');
var Promise = require('bluebird');
var Feed = models.feed;
/**
 * @api {put} /volunteer-admin/feed/new New Feed
 * @apiDescription New Feed
 * @apiGroup Admin
 * @apiParam {string} desc Feed Content
 * @apiParam {string} adminUid Admin UID
 * @apiParam {string} eventId Event's ID
 * @apiSuccessExample success
{
    "id": 1,
    "desc": "Guys! Let's get to work.",
    "adminUid": "ey3ulcBqwXfgS4XypEOEUrReqkL2",
    "eventId": "2",
    "updatedAt": "2017-06-26T02:53:00.000Z",
    "createdAt": "2017-06-26T02:53:00.000Z"
}

    @apiErrorExample error
    {"code":23,"message":"Could not Create Feed"}
 */

router.put('/new', (req, res, next) => {
    Feed.create(req.body)
        .then(result => {
            return res.json(result);
        }).catch(error => {
            constant.cantCreateFeed.data = error;
            return res.status(400).json(constant.cantCreateFeed);
        })
});

router.post('/eventFeeds', (req, res, next) => {
    Feed.findAll({
            limit: 10,
            where: {
                eventId: req.body.eventId
            },
            order: [
                ['updatedAt', 'DESC']
            ]
        })
        .then(result => {
            return res.json(result);
        }).catch(error => {
            constant.cantCreateFeed.data = error;
            return res.status(400).json(constant.cantCreateFeed);
        })
});

module.exports = router;