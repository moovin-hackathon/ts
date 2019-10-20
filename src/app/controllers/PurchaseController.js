import Customer from '../models/Customer'
import Product from '../models/Product'
import Purchase from '../models/Purchase'

class PurchaseController {
  async store(req, res) {
    const { customer: newCustomer, product: newProduct } = req.body

    let customer = await Customer.findOne({
      where: { email: newCustomer.email }
    })
    if (!customer) {
      customer = await Customer.create(newCustomer)
    }

    let product = await Product.findOne({
      where: { ref: newProduct.ref }
    })

    if (!product) {
      product = await Product.create(newProduct)
    }
    const dateNow = new Date()
    const purchase = await Purchase.create({
      customer_id: customer.id,
      product_id: product.id,
      date_purchase: dateNow,
      price: product.price,
      amount: product.amount
    })
    return res.json(purchase)
  }

  async index(req, res) {
    const purchases = await Purchase.findAll({
      include: [
        {
          model: Product,
          as: 'product'
        }
      ]
    })

    if (!purchases.length) {
      return res.status(400).json({ error: 'nenhuma compra realizada' })
    }

    return res.json(purchases)
  }
}

export default new PurchaseController()
