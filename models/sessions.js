"use strict";


module.exports = function(sequelize, DataTypes) {

    var Sessions = sequelize.define("sessions", {
        eventId: DataTypes.STRING,
        uid: DataTypes.STRING,
        name: DataTypes.STRING,
        picture: DataTypes.STRING,
        work: DataTypes.STRING,
        completion: DataTypes.INTEGER,
        access: DataTypes.INTEGER

    }, {
        classMethods: {
            // associate: function(models) {
            //     models.event.belongsToMany(models.admin, {
            //         through: Sessions
            //     });
            //     models.admin.belongsToMany(models.event, {
            //         through: Sessions
            //     });
            // }
        }

    });

    return Sessions;
};