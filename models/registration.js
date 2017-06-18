"use strict";


module.exports = function(sequelize, DataTypes) {

    var Registration = sequelize.define("registration", {

        
    }, 
        {
        classMethods: {
            associate: function(models) {

            }
        }

    });

    return Registration;
};