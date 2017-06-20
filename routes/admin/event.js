var express = require('express');
var router = express.Router();
var debug = require('debug')('admin');
var admin = require("firebase-admin");
var _ = require('underscore')
var Promise = require('bluebird')
var models = require("../../models");
var Event=models.event;

/**
 * @api {post} /volunteer-admin/event/newEvent Create New Evenet
 * @apiName New Event
 * @apiGroup Admin
 *
 * @apiParam {String} idToken Id token from login.
 * @apiParam {String} name Event Name
 * @apiParam {String} regFee Event Fee
 * @apiParam {String} date Event Date
 * @apiParam {String} time Event Time
 * @apiParam {String} adminUid UID of Event Admin
 
 * @apiSuccessExample {json} After Event Created
{
  "id": 1,
  "name": "Aura 17",
  "regFee": "FREE",
  "date": "August 10",
  "time": "Full day",
  "adminUid": "ey3ulcBqwXfgS4XypEOEUrReqkL2",
  "updatedAt": "2017-06-20T02:32:47.000Z",
  "createdAt": "2017-06-20T02:32:47.000Z"
}
 *
 * @apiErrorExample {json} error
{
    code: 1,
    data: error,
    message: "Auth Error"
}
 */

router.put('/newEvent',function(req,res,next){
    debug(req.body);
	// return models.admin.create({
 //            name: req.body.name,
 //            regFee: req.body.regFee,
 //            date: req.body.date,
 //            time: req.body.time,
//             uid:req.body.uid,
 //        });
 	var event = Event.create(req.body)
        .then(event => {
            // fcm.updateSync();
            if (event)
                return res.json(event)
        }).catch(error => {
            constant.cantCreateEvent.data = error;
            return res.status(400)
                .json(constant.cantCreateEvent);
        })
});

module.exports = router;