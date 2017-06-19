"use strict";


module.exports = function(sequelize, DataTypes) {

    var Registration = sequelize.define("registration", {
        eventId:DataTypes.STRING,
        uid:DataTypes.STRING
    }, 
        {
        classMethods: {
            associate: function(models) {
                models.event.belongsToMany(models.admin, {
                    through: Registration
                });
                models.admin.belongsToMany(models.event, {
                    through: Registration
                });
            }
        }

    });

    return Registration;
};