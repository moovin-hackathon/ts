import Sequelize, { Model } from 'sequelize'

class Customer extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        address: Sequelize.STRING,
        birthday: Sequelize.STRING
      },
      { sequelize }
    )
    return this
  }
}

export default Customer
