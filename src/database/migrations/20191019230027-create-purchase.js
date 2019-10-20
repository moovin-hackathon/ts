module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('purchases', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: { model: 'customers', key: 'id' },
        onUpdate: 'CASCADE',
        allowNull: false
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id' },
        onUpdate: 'CASCADE',
        allowNull: false
      },
      date_purchase: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: true
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
    return queryInterface.dropTable('purchases')
  }
}
