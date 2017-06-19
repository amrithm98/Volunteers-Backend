"use strict";


module.exports = function(sequelize, DataTypes) {

    var FoodVenue = sequelize.define("foodVenue", {
    	eventId:DataTypes.STRING,
        uid:DataTypes.STRING
    }, 
        {
        classMethods: {
            associate: function(models) {
                models.event.belongsToMany(models.admin, {
                    through: FoodVenue
                });
                models.admin.belongsToMany(models.event, {
                    through: FoodVenue
                });
            }
        }

    });

    return FoodVenue;
};