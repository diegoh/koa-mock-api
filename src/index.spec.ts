/* eslint-disable import/first */
jest.mock('./app');

import app from './app';

describe('src/index', () => {
  it('sets up a server', () => {
    require('./index');
    expect(app.listen).toHaveBeenCalledWith(8081);
    expect(app.listen).toHaveBeenCalledTimes(1);
  });
});
