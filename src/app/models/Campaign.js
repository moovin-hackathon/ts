import Sequelize, { Model } from 'sequelize'

class Campaign extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        date_start: Sequelize.DATE,
        date_end: Sequelize.DATE
      },
      { sequelize }
    )
    return this
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category'
    })
  }
}

export default Campaign
