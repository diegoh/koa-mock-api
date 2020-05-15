import { OK } from 'http-status-codes';
import {
  DefaultContext,
  DefaultState,
  Middleware,
  Next,
  ParameterizedContext
} from 'koa';
import { delayRequest } from './delay-request';

export const handler: Middleware = async (
  ctx: ParameterizedContext<DefaultState, DefaultContext>,
  next: Next
): Promise<void> => {
  const { delay, error } = ctx.request.query;

  if (delay) {
    await delayRequest(delay);
  }

  if (error) {
    throw new Error();
  }

  ctx.status = OK;
  await next();
};
