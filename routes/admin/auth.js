var express = require('express');
var router = express.Router();
var debug = require('debug')('admin');
var admin = require("firebase-admin");
var _ = require('underscore')
var Promise = require('bluebird')
var models = require("../../models");
var Admin=models.admin;
/**
 * @api {post} /volunteer-admin/auth/login Login an Admin
 * @apiName Login
 * @apiGroup Admin
 *
 * @apiParam {String} idToken Id token from login.
 *
 * @apiSuccessExample {json} beforeRegister
{
  "name": "John Doe",
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
	console.log('login route');
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
 * @api {post} /student/register Register Student
 * @apiDescription Register student by adding phone number, collegeId and accomodation request
 * @apiGroup Student
 * @apiParam {String} phone Phone Number
 * @apiParam {Enum=['none','male','female']} accomodation=none Whether accomodation is needed
 * @apiParam {id} collegeId college Id of the related college
 *
 * @apiExample request
 *{
      "phone":456987132,
      "collegeId":2
  }
 *
 * @apiSuccessExample success
 * "registered"
 * 
 * @apiErrorExample error
 * {
      "code": 13,
      "message": "Could not register student"
    }
 * @apiUse tokenErrors
 *  
 */

router.post('/register', (req, res, next) => {
    req.body.registered = true;
    Admin.update(_.pick(req.body, 'phone','collegeId','registered'), {
        where: {
            uid: req.uid
        }
    }).then(result => {
        res.json("Registered");
    }).catch(error => {
        res.status(400).json(constant.registerFailed);
    });
});

module.exports = router;
