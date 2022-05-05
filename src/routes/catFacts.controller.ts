import axios from 'axios';
import express from 'express';
import {winstonLog} from '../services/winston';

/**
 * catFactsController is a class with API calls for /api/cats
 */
export class catFactsController {
  public path = '/api/catfacts';
  // eslint-disable-next-line new-cap
  public router = express.Router();

  /**
   * Constructor
   */
  constructor() {
    this.intializeRoutes();
  };

  /**
 * IntializeRoutes
 */
  public intializeRoutes() {
    this.router.get(`${this.path}/fact`, this.getFact);
    this.router.get(`${this.path}/facts`, this.getFacts);
    this.router.get(`${this.path}/breeds`, this.getBreeds);
  };


  /**
   * Will get cat Fact
 * @param {object} req express request.
 * @param {object} res express response.
 */
  private getFact = async (req: express.Request, res: express.Response) => {
    try {
      const params = {
        max_length: req.query.max_length,
      };

      const res: any = await axios.get(`https://catfact.ninja/fact`, {params});
      res.status(200).json(res.data);
    } catch (err) {
      winstonLog.error(`getFact, Error: ${err}`);
      res.status(500).send(err);
    };
  };

  /**
   * Will get cat Facts
   * @param {object} req express request.
   * @param {object} res express response.
   */
  private getFacts = async (req: express.Request, res: express.Response) => {
    try {
      const params = {
        max_length: req.query.max_length,
        limit: req.query.limit,
      };

      const res: any = await axios.get(`https://catfact.ninja/facts`, {params});
      res.status(200).json(res.data);
    } catch (err) {
      winstonLog.error(`getFacts, Error: ${err}`);
      res.status(500).send(err);
    };
  };

  /**
   * Will get cat breeds
   * @param {object} req express request.
   * @param {object} res express response.
   */
  private getBreeds = async (req: express.Request, res: express.Response) => {
    try {
      const params = {
        limit: req.query.limit,
      };
      const res: any = await axios.get(`https://catfact.ninja/breeds`, {params});
      res.status(200).json(res.data);
    } catch (err) {
      winstonLog.error(`getBreeds, Error: ${err}`);
      res.status(500).send(err);
    };
  };
};
