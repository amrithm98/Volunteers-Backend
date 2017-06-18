"use strict";


module.exports = function(sequelize, DataTypes) {

    var Sessions = sequelize.define("sessions", {

        
    }, 
        {
        classMethods: {
            associate: function(models) {
            
            }
        }

    });

    return Sessions;
};