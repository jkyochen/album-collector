
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Albums', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    cover_url: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    SingerId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      allowNull: false,
      references: {
        model: 'Singers',
        key: 'id'
      }
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Albums')
};
