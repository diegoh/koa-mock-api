import * as Koa from 'koa';
import * as logger from 'koa-logger';
import { handler } from './handler';

const app = new Koa();
const port = 8081;

app.use(logger());
app.use(handler);

// eslint-disable-next-line no-console
console.log(
  `Started mock-server in port ${port}
  Routes:
    - GET /
  Query Parameters:
    - delay: time in miliseconds
    - error: returns an error response (500)`
);

app.listen(port);
