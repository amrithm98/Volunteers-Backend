var express = require('express');
var router = express.Router();
var debug = require('debug')('admin');
var admin = require("firebase-admin");
var _ = require('underscore')
var Promise = require('bluebird')
var models = require("../../models");
var Admin=models.admin;
var fcm=require('../fcm')   
/**
 * @api {post} /volunteer-admin/auth/login Login an Admin
 * @apiName Login
 * @apiGroup Admin
 *
 * @apiParam {String} idToken Id token from login.
 *
 * @apiSuccessExample {json} After Register
{
  "name": "John Doe",
  "uid":cJ2crx0lpVSbvPs1VbhU0BHgItE2,
  "email":johndoe@gmail.com,
  "phone":9876543210,
  "college":MIT,
  "registered":True,
  "picture": "https://lh6.googleusercontent.com/-LdIUNFJBriQ/AAAAAAAAAAI/AAAAAAAAAvI/HUwlqct9yJY/photo.jpg",
  "status": 10
}
 *
 * @apiErrorExample {json} error
{
    code: 1,
    data: error,
    message: "Auth Error"
}
 */

router.post('/login', function(req, res, next) {
	debug('login route');
    profile = req.profile;
    return models.admin.findOne({
        where: {
            uid: req.profile.user_id
        }
    }).then(user => {
        if (user)
            return new Promise((resolve, reject) => {
                resolve(user)
            });
        return models.admin.create({
            uid: profile.user_id,
            name: profile.name,
            picture: profile.picture,
            email: profile.email
        });
    }).then(user => {
        debug('fcm');
        fcm.notification("Welcome","Welcome");
        res.json(user);
    }).catch(function(error) {
        res.status(500).send({
            code: 2,
            data: error,
            message: "Could not create Admin"
        })
        debug(error);
    });
});

/**
 * @api {post} /volunteer-admin/auth/register Register an Admin
 * @apiName Register
 * @apiGroup Admin
 *
 * @apiParam {String} idToken Id token from login.
 * @apiParam {String} phone Phone Number
 * @apiParam {String} college CollegeName
 * @apiParam {String} registered True

 *
 * @apiSuccessExample {json} Success
{
  "Registered"
}
 *
 * @apiErrorExample {json} error
{
    code: 13,
    message: "Could not register student"
}
 */

router.post('/register', (req, res, next) => {
    req.body.registered = true;
    Admin.update(_.pick(req.body, 'phone','college','registered'), {
        where: {
            uid: req.uid
        }
    }).then(result => {
        fcm.
        res.json("Registered");
    }).catch(error => {
        res.status(400).json(constant.registerFailed);
    });
});

module.exports = router;
