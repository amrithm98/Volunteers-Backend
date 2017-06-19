"use strict";


module.exports = function(sequelize, DataTypes) {

    var Publicity = sequelize.define("publicity", {
    }, 
        {
        classMethods: {
            associate: function(models) {
                models.event.belongsToMany(models.admin, {
                    as:'pub',
                    through: Publicity
                });
                models.admin.belongsToMany(models.event, {
                    through: Publicity
                });
            }
        }

    });

    return Publicity;
};