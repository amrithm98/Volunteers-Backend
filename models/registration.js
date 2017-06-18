"use strict";


module.exports = function(sequelize, DataTypes) {

    var Registration = sequelize.define("registration", {
        eventId:DataTypes.STRING,
        uid:DataTypes.STRING
    }, 
        {
        classMethods: {
            associate: function(models) {

            }
        }

    });

    return Registration;
};