import express, { Express } from 'express';
import path from 'path';

import './database/index';

import { routes } from './routes';

class App {
  private _server: Express;

  constructor() {
    this._server = express();

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this._server.use(express.json());

    this._server.use(
      '/files/',
      express.static(path.resolve(__dirname, '..', 'temp', 'uploads'))
    );
  }

  routes() {
    this._server.use(routes);
  }

  get server(): Express {
    return this._server;
  }
}

export const { server } = new App();
