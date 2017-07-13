var router = require('express').Router();
var debug = require('debug')('admin')
var models = require('../../models');
var constant = require('../../constant');
var fcm = require('../fcm');
var Promise = require('bluebird');
var _ = require('underscore');

router.put('/:id/add', (req, res, next) => {
    var team = req.params.id;
    switch (team) {
        case "Accomodation":
            Model = models.accomodation;
            break;
        case "Food_and_Venue":
            Model = models.foodVenue;
            break;
        case "Publicity":
            Model = models.publicity;
            break;
        case "Registration":
            Model = models.registration;
            break;
        case "Sessions":
            Model = models.sessions;
            break;
        case "Sponsorship":
            Model = models.sponsorship;
            break;
        default:
            return res.json({ "msg": "Incorrect Domain" });
    }
    Model.create(req.body).then(team => {
        if (team) {
            fcm.notification("New Crew Member", "A Volunteer Was Added");
            return res.json("AddedToTeam");
        }
    }).catch(error => {
        return res.status(400).json(constant.cantCreateFeed)
    });
    // Feed.create(req.body)
    //     .then(result => {
    //         return res.json(result);
    //     }).catch(error => {
    //         constant.cantCreateFeed.data = error;
    //         return res.status(400).json(constant.cantCreateFeed);
    //     })

});