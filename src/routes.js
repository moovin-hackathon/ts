import { Router } from 'express'

import CustomerController from './app/controllers/CustomerController'
import PurchaseController from './app/controllers/PurchaseController'
import CategoryController from './app/controllers/CategoryController'
import CampaignController from './app/controllers/CampaignController'

const routes = new Router()

routes.post('/camapaigns', CampaignController.store)
routes.get('/camapaigns', CampaignController.index)

routes.get('/customers', CustomerController.index)
routes.get('/customers/:id', CustomerController.show)
routes.post('/customers', CustomerController.store)

routes.get('/purchases', PurchaseController.index)
routes.post('/purchases', PurchaseController.store)

routes.get('/categories', CategoryController.index)
routes.post('/categories', CategoryController.store)

routes.get('/adt', CategoryController.index)

routes.get('/', (req, res) => {
  res.json({ sucesso: true })
})

export default routes
