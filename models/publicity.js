"use strict";


module.exports = function(sequelize, DataTypes) {

    var Publicity = sequelize.define("publicity", {
        eventId:DataTypes.STRING,
        uid:DataTypes.STRING
    }, 
        {
        classMethods: {
            associate: function(models) {
          
            }
        }

    });

    return Publicity;
};