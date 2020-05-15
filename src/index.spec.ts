/* eslint-disable import/first */
jest.mock('koa');
jest.mock('koa-logger');
jest.mock('./handler');

import * as Koa from 'koa';
import * as logger from 'koa-logger';
import { mocked } from 'ts-jest/utils';
import { handler } from './handler';

describe('src/index', () => {
  const mockedKoa = mocked(Koa, true);

  afterEach(() => {
    mockedKoa.mockClear();
  });

  it('sets up a server', () => {
    require('./index');
    expect(mockedKoa.mock.instances[0].listen).toHaveBeenCalledWith(8081);
    expect(mockedKoa.mock.instances[0].use).toHaveBeenCalledWith(logger());
    expect(mockedKoa.mock.instances[0].use).toHaveBeenCalledWith(handler);
  });
});
