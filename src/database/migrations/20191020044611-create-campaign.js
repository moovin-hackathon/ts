module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('campaigns', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: { model: 'categories', key: 'id' },
        onUpdate: 'CASCADE',
        allowNull: true
      },
      date_start: {
        type: Sequelize.DATE,
        allowNull: false
      },
      date_end: {
        type: Sequelize.DATE,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('campaigns')
  }
}
