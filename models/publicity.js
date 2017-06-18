"use strict";


module.exports = function(sequelize, DataTypes) {

    var Publicity = sequelize.define("publicity", {
        
        
    }, 
        {
        classMethods: {
            associate: function(models) {
                models.publicity.belongsTo(models.event);
                models.event.hasOne(models.publicity);
            }
        }

    });

    return Publicity;
};