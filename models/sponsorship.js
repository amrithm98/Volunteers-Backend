"use strict";


module.exports = function(sequelize, DataTypes) {

    var Sponsorship = sequelize.define("sponsorship", {
        eventId:DataTypes.STRING,
        uid:DataTypes.STRING
        
    }, 
        {
        classMethods: {
            associate: function(models) {
                
            }
        }

    });

    return Sponsorship;
};