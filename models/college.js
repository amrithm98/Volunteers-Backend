"use strict";

module.exports = function(sequelize, DataTypes) {
    var Colleges = sequelize.define("college", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function(models) {

            }
        }

    });

    return Colleges;
};