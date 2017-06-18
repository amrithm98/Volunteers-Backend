"use strict";


module.exports = function(sequelize, DataTypes) {

    var Accomodation = sequelize.define("accomodation", {
    	eventId:DataTypes.STRING,
        uid:DataTypes.STRING
    }, 
        {
        classMethods: {
            associate: function(models) {
                
            }
        }

    });

    return Accomodation;
};