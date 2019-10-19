import { Router } from 'express';

const routes = new Router();

routes.post('/customer', (req, res) =>
  res.json({ message: 'Welcome to Omni CLI' })
);

export default routes;
