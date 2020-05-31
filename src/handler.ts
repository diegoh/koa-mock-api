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
  const shouldThrow = error === true || error === 'true';

  if (delay) {
    await delayRequest(delay);
  }

  if (shouldThrow) {
    throw new Error();
  }

  ctx.status = OK;
  await next();
};
