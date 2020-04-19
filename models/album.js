'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: DataTypes.STRING,
    cover_url: DataTypes.STRING
  }, {});
  Album.associate = function(models) {
    models.Album.hasMany(models.Song, {
        onDelete: 'CASCADE',
        hooks: true
    });
  };
  return Album;
};