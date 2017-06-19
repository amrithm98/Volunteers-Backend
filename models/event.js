"use strict";

//Foreign key :adminId --auto gen by sequilize

module.exports = function(sequelize, DataTypes) {

    var Event = sequelize.define("event", {

        name: DataTypes.STRING,
        date:DataTypes.STRING,
        regFee:DataTypes.INTEGER,
        time:DataTypes.STRING,
        id:{
            type:DataTypes.INTEGER,
            unique:true,
            primaryKey:true,
            autoIncrement: true
        },
        //adminId also
    }, 
        {
        classMethods: {
            associate: function(models) {
                models.event.belongsTo(models.admin); //Admin is the target model--automatically created a foreign key
                models.admin.hasMany(models.event);
            }
        }

    });

    return Event;   
};