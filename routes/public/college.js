var router = require('express').Router();
var debug = require('debug')('admin')
var models = require('../../models');
var constant = require('../../constant');
var fcm = require('../fcm');
var Promise = require('bluebird');
var College = models.college;
var _ = require('underscore')

/**
 * @api {get} /public/college/ Get All colleges
 * @apiGroup Public
 * @apiSuccessExample success
 * [
     {
         "id":1,
         "name":"College of Engineering Trivandrum",
         "createdAt":"2017-06-26T02:50:30.000Z",
         "updatedAt":"2017-06-26T02:50:30.000Z"
     }
 * ]
    @apiErrorExample error
    {
        "code":12,
        "message":"Could not Fetch college"
    }
 */

router.get('/', (req, res, next) => {
    College.findAll()
        .then(result => {
            var idName = _.map(result, function(ob) {
                return _.pick(ob, 'id', 'name');
            });
            debug(idName);
            return res.json(idName);
        }).catch(error => {
            constant.cantFetchCollege = error;
            return res.status(400).json(constant.cantFetchCollege);
        })
});

module.exports = router;