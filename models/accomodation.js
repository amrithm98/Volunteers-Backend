"use strict";


module.exports = function(sequelize, DataTypes) {

    var Accomodation = sequelize.define("accomodation", {
    	
        
    }, 
        {
        classMethods: {
            associate: function(models) {
                models.accomodation.hasOne(models.event);
        		models.event.belongsTo(models.accomodation);
            }
        }

    });

    return Accomodation;
};