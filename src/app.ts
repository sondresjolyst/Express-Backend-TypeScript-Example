import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {winstonLog} from './services/winston';

//Express-Backend-TypeScript-Example

/**
 * Constructor
 */
export class App {
  public app: express.Application;
  public host: String;
  public port: number;

  /**
 * @param {Array} controllers Array of all controllers.
 * @param {host} host IP to use
 * @param {number} port Port to use
 */
  constructor(controllers: any[], host: string, port: number) {
    this.app = express();
    this.host = host;
    this.port = port;

    this.initializeMiddlewares();
  }

  /**
   * initializeMiddlewares
   */
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  /**
 * @param {Array} controllers Array of all controllers.
 */
  private initializeControllers(controllers: any[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  /**
 * Listen
 */
  public listen() {
    this.app.listen(this.port, () => {
      winstonLog.info(`⚡️[server]: Server is running at https://${this.host}:${this.port}`);
    });
  }
}
