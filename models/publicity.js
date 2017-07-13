"use strict";


module.exports = function(sequelize, DataTypes) {

    var Publicity = sequelize.define("publicity", {
        eventId: DataTypes.STRING,
        uid: DataTypes.STRING,
        work: DataTypes.STRING,
        completion: DataTypes.INTEGER,
        access: DataTypes.INTEGER

    }, {
        classMethods: {
            // associate: function(models) {
            //     models.event.belongsToMany(models.admin, {
            //         through: Publicity
            //     });
            //     models.admin.belongsToMany(models.event, {
            //         through: Publicity
            //     });
            // }
        }

    });

    return Publicity;
};