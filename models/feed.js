"use strict";

//Foreign key :adminUid --auto gen by sequilize
//Foreign Key :eventId  --auto gen by sequilize
module.exports = function(sequelize, DataTypes) {

    var Feed = sequelize.define("feed", {
        desc: DataTypes.STRING
            //adminUid also
            //eventId also
    }, {
        classMethods: {
            associate: function(models) {
                models.feed.belongsTo(models.admin); //Admin is the target model--automatically created a foreign key
                models.admin.hasMany(models.feed);
                models.feed.belongsTo(models.event); //eventId foreign key added
                models.event.hasMany(models.feed);
            }
        }

    });

    return Feed;
};