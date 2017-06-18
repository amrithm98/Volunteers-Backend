"use strict";


module.exports = function(sequelize, DataTypes) {

    var Sessions = sequelize.define("sessions", {
        eventId:DataTypes.STRING,
        uid:DataTypes.STRING
    }, 
        {
        classMethods: {
            associate: function(models) {
            
            }
        }

    });

    return Sessions;
};