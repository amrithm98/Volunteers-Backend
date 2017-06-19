var express = require('express');
var router = express.Router();
var debug = require('debug')('admin');
var admin = require("firebase-admin");
var _ = require('underscore')
var Promise = require('bluebird')
var models = require("../../models");
var Event=models.event;

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