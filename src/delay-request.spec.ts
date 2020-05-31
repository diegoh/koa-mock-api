import { delayRequest } from './delay-request';

jest.useFakeTimers();

describe('src/delay-request', () => {
  it('sets a delay', async () => {
    const delay = 1000;
    delayRequest(delay);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), delay);
  });
});
