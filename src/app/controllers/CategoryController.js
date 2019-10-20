import Category from '../models/Category'

class CategoryController {
  async store(req, res) {
    const { name } = req.body

    const categoryExist = await Category.findOne({
      where: { name }
    })
    if (categoryExist) {
      return res.status(400).json({ error: 'Categoria já cadastrada' })
    }
    const category = await Category.create({ name })

    return res.json(category)
  }

  async index(req, res) {
    const categories = await Category.findAll()

    if (!categories.length) {
      return res.status(400).json({ error: 'nenhuma categoria encontrada' })
    }

    return res.json(categories)
  }
}

export default new CategoryController()
