"use strict";

//Primary key :UID

module.exports = function(sequelize, DataTypes) {

    var Admin = sequelize.define("admin", {

        name: DataTypes.STRING,

        id:{
            type:DataTypes.INTEGER
            unique:true
            autoIncrement: true
        },
    }, 
        {
        classMethods: {
            associate: function(models) {
                models.event.belongsTo(models.admin); //Admin is the target model--automatically created a foreign key
                models.admin.hasMany(models.event);
            }
        }

    });

    return Admin;
};