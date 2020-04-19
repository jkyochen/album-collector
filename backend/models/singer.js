
module.exports = (sequelize, DataTypes) => {
  const Singer = sequelize.define('Singer', {
    name: DataTypes.STRING
  }, {});
  Singer.associate = function (models) {
    models.Singer.hasMany(models.Album, {
      onDelete: 'CASCADE',
      hooks: true
    });
  };
  return Singer;
};
