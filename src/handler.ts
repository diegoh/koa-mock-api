import {
  DefaultContext,
  DefaultState,
  Middleware,
  Next,
  ParameterizedContext
} from 'koa';

const delayRequest = async (delay: number): Promise<void> => {
  await new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

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

  ctx.status = 200;
  await next();
};
