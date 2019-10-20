import Customer from '../models/Customer'

class CustomerController {
  async store(req, res) {
    const { email } = req.body

    const customerExist = await Customer.findOne({ where: { email } })

    if (customerExist) {
      res.status(400).json({ error: 'usuário já cadastrado' })
    }

    const customer = await Customer.create(req.body)
    return res.json(customer)
  }

  async index(req, res) {
    const customers = await Customer.findAll()

    if (!customers.length) {
      return res.status(400).json({ error: 'nenhum cliente cadastrado' })
    }
    return res.json(customers)
  }

  async show(req, res) {
    const { id } = req.params
    const customer = await Customer.findByPk(id)

    if (!customer) {
      return res.status(400).json({ error: 'Cliente nao encontrado' })
    }

    return res.json(customer)
  }
}

export default new CustomerController()
