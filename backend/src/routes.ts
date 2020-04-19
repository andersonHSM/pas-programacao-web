import { Router } from 'express';

import UserController from './app/controllers/UserController';
import LocationController from './app/controllers/LocationController';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ ok: true });
});

routes.post('/users/', UserController.store);

routes.post('/locations/', LocationController.store);

export { routes };
