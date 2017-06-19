"use strict";


module.exports = function(sequelize, DataTypes) {

    var Sessions = sequelize.define("sessions", {
        eventId:DataTypes.STRING,
        uid:DataTypes.STRING
    }, 
        {
        classMethods: {
            associate: function(models) {
                models.event.belongsToMany(models.admin, {
                    through: Sessions
                });
                models.admin.belongsToMany(models.event, {
                    through: Sessions
                });
            }
        }

    });

    return Sessions;
};