"use strict";


module.exports = function(sequelize, DataTypes) {

    var Sponsorship = sequelize.define("sponsorship", {

        
    }, 
        {
        classMethods: {
            associate: function(models) {
                
            }
        }

    });

    return Sponsorship;
};