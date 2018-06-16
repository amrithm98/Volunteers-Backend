var FCM = require('fcm-node');
var serverKey = 'AAAAM24P7sg:APA91bG9Nb4XMbCjkZ1hyAjaXtXECDcRzVgKmv6WjGC4vzwUlrIeF8WuBboAd9vYHUeV8sXoSs4ZHakv9nzKWDe4LxXnbuvFX8XHqoaEai0RB5fcW2GKE3HugAifTca2g0Rk1k4fKQ3w';
var fcm = new FCM(serverKey);
var Promise = require('bluebird');
var debug = require('debug')('fcm');
var wrapper = {

    updateSync() {
        var message = {
            to: '/topics/events',
            data: {
                'type': 'EVENT_SYNC'
            }
        };

        var promise = new Promise((resolve, reject) => {
            fcm.send(message, (err, res) => {
                if (err) {
                    debug("Error : ", err);
                    reject(err);
                } else {
                    debug("Resolve : ", res);
                    resolve(res);
                }
            })
        })

        return promise;
    },

    updateHighlightSync() {
        var message = {
            to: '/topics/volunteers',
            data: {
                'type': 'HIGHLIGHT_SYNC'
            }
        };

        var promise = new Promise((resolve, reject) => {
            fcm.send(message, (err, res) => {
                if (err) {
                    debug("Error : ", err);
                    reject(err);
                } else {
                    debug("Resolve : ", res);
                    resolve(res);
                }
            })
        })

        return promise;
    },

    notification(title, body) {
<<<<<<< HEAD
        debug('Notification')
=======
	debug('Login');
>>>>>>> 8d974d3b1658cca343bd029751c1cee09440aa8e
        var message = {
            to: '/topics/volunteers',
            notification: {
                'title': title,
                'body': body
            }
        }

        var promise = new Promise((resolve, reject) => {
            fcm.send(message, (err, res) => {
                if (err) {
                    debug("Error : ", err);
                    reject(err);
                } else {
                    debug("Resolve : ", res);
                    resolve(res);
                }
            })
        })

        return promise;
    }
};
module.exports = wrapper;
