"use strict";


module.exports = function(sequelize, DataTypes) {

    var EventVolunteer = sequelize.define("eventVolunteer", {
        eventId: DataTypes.STRING,
        uid: DataTypes.STRING,
    }, {
        classMethods: {

        }

    });

    return EventVolunteer;
};