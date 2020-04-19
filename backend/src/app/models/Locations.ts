import Sequelize, { Model, BelongsToGetAssociationMixin } from 'sequelize';

import { sequelize } from '../../database';

import Users from './User';

class Locations extends Model {
  name!: string;
  latitude!: number;
  longitude!: number;
  type!: string;

  createdAt!: Date;
  updatedAt!: Date;
}

Locations.init(
  {
    name: Sequelize.STRING,
    latitude: Sequelize.FLOAT,
    longitude: Sequelize.FLOAT,
    type: Sequelize.STRING,
    adress: Sequelize.STRING,
  },
  { sequelize, tableName: 'Locations' }
);

export default Locations;
