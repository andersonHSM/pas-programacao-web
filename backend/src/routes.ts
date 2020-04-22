import { Router, Request, Response, NextFunction } from 'express';

import UserController from './app/controllers/UserController';
import LocationController from './app/controllers/LocationController';
import { sessionController } from './app/controllers/SessionController';
import { authMiddleware } from './app/middlewares/AuthMiddleware';

const routes = Router();

routes.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return next();
});

routes.post('/users/', UserController.store);

routes.post('/login/', sessionController.store);

routes.get('/locations/', LocationController.index);

routes.use(authMiddleware);

routes.get('/user/:id/locations/', UserController.listUserLocale);

routes.post('/locations/', LocationController.store);
routes.patch('/locations/:id/', LocationController.update);
routes.delete('/locations/:id/', LocationController.delete);

export { routes };
