"use strict";


module.exports = function(sequelize, DataTypes) {

    var Sponsorship = sequelize.define("sponsorship", {
        eventId:DataTypes.STRING,
        uid:DataTypes.STRING
        
    }, 
        {
        classMethods: {
            associate: function(models) {
                models.event.belongsToMany(models.admin, {
                    through: Sponsorship
                });
                models.admin.belongsToMany(models.event, {
                    through: Sponsorship
                });
            }   
        }

    });

    return Sponsorship;
};