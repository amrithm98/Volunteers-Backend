"use strict";


module.exports = function(sequelize, DataTypes) {

    var Publicity = sequelize.define("publicity", {

        
    }, 
        {
        classMethods: {
            associate: function(models) {
                
            }
        }

    });

    return Publicity;
};