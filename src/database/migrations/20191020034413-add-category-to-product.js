module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('products', 'category_id', {
      type: Sequelize.INTEGER,
      references: { model: 'categories', key: 'id' },
      onUpdate: 'CASCADE',
      allowNull: true
    })
  },

  down: queryInterface => {
    return queryInterface.removeColumn('products', 'category_id')
  }
}
