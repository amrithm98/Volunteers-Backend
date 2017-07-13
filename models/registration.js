"use strict";


module.exports = function(sequelize, DataTypes) {

    var Registration = sequelize.define("registration", {
        eventId: DataTypes.STRING,
        uid: DataTypes.STRING,
        work: DataTypes.STRING,
        completition: DataTypes.INTEGER,
        access: DataTypes.INTEGER
    }, {
        classMethods: {

        }

    });

    return Registration;
};