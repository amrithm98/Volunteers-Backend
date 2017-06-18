"use strict";


module.exports = function(sequelize, DataTypes) {

    var Accomodation = sequelize.define("accomodation", {
    	
        
    }, 
        {
        classMethods: {
            associate: function(models) {
                
            }
        }

    });

    return Accomodation;
};