import Sequelize, { Model } from 'sequelize'

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        variation: Sequelize.STRING,
        amount: Sequelize.INTEGER,
        price: Sequelize.FLOAT,
        ref: Sequelize.STRING,
        tags: Sequelize.STRING
      },
      { sequelize }
    )
    return this
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'categories'
    })
  }
}

export default Product
