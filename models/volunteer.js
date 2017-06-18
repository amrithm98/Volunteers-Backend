"use strict";

//id is the primary key and it is used as drishti/dhwani id to create QR codes

module.exports = function(sequelize, DataTypes) {
    var Students = sequelize.define("student", {
        name: DataTypes.STRING,
        uid: {
            //user_id from google idToken
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        status: {
            type: DataTypes.ENUM,
            values: ['active', 'banned', 'pending'],
            defaultValue: 'active'
        }
        registered: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        picture: {
            type: DataTypes.STRING,
            defaultValue: ''
        }
    }, 
    {
        classMethods: {
            associate: function(models) {
                // models.student.belongsTo(models.college)
                // models.college.hasMany(models.student)
            }
        }

    });

    return Students;
};
