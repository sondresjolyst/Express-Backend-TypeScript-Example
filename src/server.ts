import dotenv from 'dotenv';
import {App} from './app';
import {catFactsController} from './routes/catFacts.controller';

dotenv.config();

const host = process.env['HOST'] || '0.0.0.0';

const port = Number(process.env['PORT']);
const portNum = isNaN(port) ? 1025:port;

// eslint-disable-next-line new-cap
const app = new App([new catFactsController()], host, portNum);

app.app.listen(portNum, () => {
  console.log(`⚡️[server]: Server is running at https://${host}:${portNum}`);
});
