var router = require('express').Router();
var debug = require('debug')('admin')
var models = require('../../models');
var constant = require('../../constant');
var fcm = require('../fcm');
var Promise = require('bluebird');
var _ = require('underscore')

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
    debug(req.body)
    models.college.create(req.body)
        .then(result => {
            return res.json(result);
        }).catch(error => {
            constant.cantPutCollege.data = error;
            return res.status(400).json(constant.cantPutCollege);
        })
});

/**
 * @api {post} /volunteer-admin/people/ Get List of Volunteers in the same college
 * @apiDescription Get List of Volunteers in the same college
 * @apiGroup Admin
 * @apiParam {string} idToken Token
 * @apiSuccessExample success
 * {
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
    }

    @apiErrorExample error
    {"code":22,"message":"Could not put college"}
*/
router.post('/people', (req, res, next) => {
    models.admin.findAll({
            where: {
                collegeId: req.body.collegeId
            }
        })
        .then(result => {
            var data = _.map(result, function(ob) {
                return _.pick(ob, 'uid', 'name', 'email', 'picture', 'phone');
            });
            return res.json(data);
        }).catch(error => {
            debug(error)
            constant.cantFetchCollege = error;
            return res.status(400).json(constant.cantFetchCollege);
        })
});

module.exports = router;