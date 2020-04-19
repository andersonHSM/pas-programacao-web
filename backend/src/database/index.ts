import { Sequelize, Options } from 'sequelize';

import dbConfig from '../config/database';

export class Database {
  sequelize: Sequelize;

  constructor() {
    this.sequelize = new Sequelize(dbConfig as Options);
  }
}

export const { sequelize } = new Database();
