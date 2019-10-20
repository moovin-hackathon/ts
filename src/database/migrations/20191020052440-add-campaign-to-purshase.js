module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('purchases', 'campaign_id', {
      type: Sequelize.INTEGER,
      references: { model: 'campaigns', key: 'id' },
      onUpdate: 'CASCADE',
      allowNull: true
    })
  },

  down: queryInterface => {
    return queryInterface.removeColumn('purchases', 'campaign_id')
  }
}
