import dotenv from 'dotenv';
import {App} from './app';
import {catFactsController} from './routes/catFacts.controller';

dotenv.config();

const host: string = process.env['HOST'] || '0.0.0.0';
const port: number = parseInt(process.env['PORT']!) || 8001;

// eslint-disable-next-line new-cap
const app = new App([new catFactsController()], host, port);

app.app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://${host}:${port}`);
});
