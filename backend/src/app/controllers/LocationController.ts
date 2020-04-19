import { Request, Response } from 'express';
import Joi from '@hapi/joi';

import Locations from '../models/Locations';
import { SignedRequest } from '../interfaces/SignedRequest';
import { paginatorParams } from '../auxiliaries/paginator-info';

class LocationController {
  async store(req: SignedRequest, res: Response) {
    const schema = Joi.object({
      name: Joi.string().min(3).max(60).required(),
      adress: Joi.string().min(5).max(80).required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      type: Joi.string().max(30).required(),
      user_id: Joi.number().required(),
      active: Joi.boolean(),
    });

    const { userId } = req;

    const locationData = {
      ...req.body,
      user_id: userId,
    };

    try {
      const schemaMatchs = await schema.validateAsync(locationData);
    } catch (error) {
      return res.status(400).json({ error: 'Verify inputed data.' });
    }

    const location = await Locations.create(locationData);

    return res.json({ location });
  }

  async index(req: Request, res: Response) {
    const { page, limit } = paginatorParams(req);

    const locationsList = await Locations.findAll({
      offset: (page - 1) * limit,
      limit: limit,
      order: ['id'],
    });

    return res.status(200).json({ locationsList });
  }
}

export default new LocationController();
