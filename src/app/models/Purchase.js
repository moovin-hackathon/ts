import Sequelize, { Model } from 'sequelize'

class Purchase extends Model {
  static init(sequelize) {
    super.init(
      {
        date_purchase: Sequelize.DATE,
        price: Sequelize.STRING
      },
      { sequelize }
    )
    return this
  }

  static associate(models) {
    this.belongsTo(models.Customer, {
      foreignKey: 'customer_id',
      as: 'customer'
    })
    this.belongsTo(models.Product, {
      foreignKey: 'product_id',
      as: 'product'
    })
    this.belongsTo(models.Campaign, {
      foreignKey: 'campaign_id',
      as: 'campaign'
    })
  }
}

export default Purchase
