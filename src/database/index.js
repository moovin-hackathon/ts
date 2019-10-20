import Sequelize from 'sequelize'

import databaseConfig from '../config/database'
import Customer from '../app/models/Customer'
import Product from '../app/models/Product'
import Purchase from '../app/models/Purchase'
import Category from '../app/models/Category'
import Campaign from '../app/models/Campaign'

const models = [Customer, Product, Purchase, Category, Campaign]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)

    models
      .map(model => model.init(this.connection))
      .map(model => {
        return model.associate && model.associate(this.connection.models)
      })
  }
}

export default new Database()
