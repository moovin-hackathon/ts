module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
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
      variation: {
        type: Sequelize.STRING,
        allowNull: true
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      ref: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tags: {
        type: Sequelize.STRING,
        allowNull: true
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
    return queryInterface.dropTable('products')
  }
}
