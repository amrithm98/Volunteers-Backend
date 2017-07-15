"use strict";


module.exports = function(sequelize, DataTypes) {

    var Registration = sequelize.define("registration", {
        eventId: DataTypes.STRING,
        uid: DataTypes.STRING,
        name: DataTypes.STRING,
        picture: DataTypes.STRING,
        work: DataTypes.STRING,
        completion: DataTypes.INTEGER,
        access: DataTypes.INTEGER
    }, {
        classMethods: {

        }

    });

    return Registration;
};