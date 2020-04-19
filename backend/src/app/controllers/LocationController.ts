import { Request, Response } from 'express';
import Locations from '../models/Locations';

class LocationController {
  async store(req: Request, res: Response) {
    const location = await Locations.create(req.body);

    return res.json({ location });
  }
}

export default new LocationController();
