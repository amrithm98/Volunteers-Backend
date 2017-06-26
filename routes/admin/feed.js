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
    {
        "code":23,
        "message":"Could not Create Feed"
    }
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

/**
 * @api {put} /volunteer-admin/feed/eventFeeds Get Event Feeds
 * @apiDescription Get Event Feeds
 * @apiGroup Admin
 * @apiParam {string} eventId Event ID
 * @apiParam {string} idToken Token
 * @apiSuccessExample success
[

    {
        "id": 9,
        "desc": "Pong",
        "createdAt": "2017-06-26T03:02:52.000Z",
        "updatedAt": "2017-06-26T03:02:52.000Z",
        "adminUid": "ey3ulcBqwXfgS4XypEOEUrReqkL2",
        "eventId": 2
    }
]

 *  @apiErrorExample error
    {
        code: 24,
        message: "Could not Fetch Feed"
    }
 */

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