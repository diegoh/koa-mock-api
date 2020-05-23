import * as Koa from 'koa';
import * as logger from 'koa-logger';
import { handler } from './handler';

const app = new Koa();

app.use(logger());
app.use(handler);

export default app;
