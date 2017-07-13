"use strict";


module.exports = function(sequelize, DataTypes) {

    var Accomodation = sequelize.define("accomodation", {
        eventId: DataTypes.STRING,
        uid: DataTypes.STRING,
        work: DataTypes.STRING,
        completition: DataTypes.INTEGER,
        access: DataTypes.INTEGER

    }, {
        classMethods: {
            associate: function(models) {

            }
        }

    });

    return Accomodation;
};