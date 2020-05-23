/* eslint-disable import/first */
// https://github.com/kulshekhar/ts-jest/issues/661
jest.mock('./delay-request');

import { createMockContext } from '@shopify/jest-koa-mocks';
import { OK } from 'http-status-codes';
import { mocked } from 'ts-jest/utils';
import { delayRequest } from './delay-request';
import { handler } from './handler';

describe('src/handler', () => {
  const next = jest.fn();
  const MockedDelayRequest = mocked(delayRequest, true);

  it('sets the status to 200', async () => {
    const ctx = createMockContext();

    await handler(ctx, next);

    expect(ctx.status).toBe(OK);
  });

  it('calls next', async () => {
    const ctx = createMockContext();

    await handler(ctx, next);

    expect(next).toHaveBeenCalledTimes(1);
  });

  it('throws an error', async () => {
    const ctx = createMockContext();
    ctx.request.query.error = true;

    try {
      await handler(ctx, next);
    } catch (error) {
      expect(error).toBeTruthy();
    }

    expect.assertions(1);
  });
  it('does not throw an error', async () => {
    const ctx = createMockContext();
    ctx.request.query.error = true;

    try {
      await handler(ctx, next);
    } catch (error) {
      expect(error).toBeTruthy();
    }

    expect.assertions(1);
  });
  it('delays a request', async () => {
    const ctx = createMockContext();
    const delay = 10000;
    ctx.request.query.delay = delay;

    await handler(ctx, next);

    expect(MockedDelayRequest.mock.calls.length).toBe(1);
    expect(MockedDelayRequest.mock.calls[0][0]).toBe(delay);
  });
});
