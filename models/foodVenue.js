"use strict";


module.exports = function(sequelize, DataTypes) {

    var FoodVenue = sequelize.define("foodVenue", {
    	eventId:DataTypes.STRING,
        uid:DataTypes.STRING
    }, 
        {
        classMethods: {
            associate: function(models) {
                
            }
        }

    });

    return FoodVenue;
};