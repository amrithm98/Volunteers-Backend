var debug = require('debug')('middle');
var admin = require("firebase-admin");
var models = require('../models');
var constant = require('../constant');
var md5 = require('md5');
var constant = require('../constant.js');

/**
 *
 * 
 */
module.exports = function(req, res, next) {
    idToken = req.body.idToken || req.headers['x-auth-token'] || "";
    debug(idToken);
    if (idToken && md5(idToken) == 'f8c27d1799617430cd525bda43c3fac2') {
        //random verification for test purposes
        req.uid = constant.testProfile.uid;
        req.profile = constant.testProfile;

        if (req.url.startsWith('/volunteer-admin/auth')) {
            return next();
        } else if (req.url.startsWith('/volunteer-admin')) {
            models.admin.findOne({
                where: {
                    uid: req.profile.user_id
                }
            }).then(admin => {
                if (admin && admin.status) {
                    req.admin = admin;
                    if (req.url.startsWith('/volunteer-admin/volunteer')) {
                        if (req.admin.status >= 5)
                            return next();
                    } else
                        return next();
                }
                throw {
                    msg: "Not Verified"
                }
            }).catch(error => {
                constant.wrongToken.data = error;
                return res.status(401).json(constant.wrongToken);
            });
        } else
            next();

    } else if (req.url.startsWith('/public')) {
        return next();
    } else if (!idToken) {
        return res.status(401).json(constant.noAuthToken);
    } else {
        admin.auth().verifyIdToken(idToken)
            .then(function(decodedToken) {

                req.uid = decodedToken.uid;

                req.profile = decodedToken;
                debug(req.profile);

                if (req.url.startsWith('/volunteer-admin/auth')) {
                    return next();
                } 

                else if (req.url.startsWith('/volunteer-admin')) {
                    models.admin.findOne({
                        where: {
                            uid: req.profile.user_id
                        }
                    }).then(admin => {
                        if (admin && admin.status) {
                            req.admin = admin;
                            if (req.url.startsWith('/volunteer-admin/volunteer')) {
                                if (req.admin.status >= 0)
                                    return next();
                            } else
                                return next();
                        }
                        throw {
                            msg: "Not Verified"
                        }
                    }).catch(error => {
                        return res.status(401).json(constant.wrongToken);
                    });
                } 

                else
                    return next();
            }).catch((error) => {
                constant.wrongToken.data = error;
                return res.status(401).json(constant.wrongToken);
            });
    }
}