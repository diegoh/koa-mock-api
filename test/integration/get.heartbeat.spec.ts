import * as HttpStatusCodes from 'http-status-codes';
import { server } from './server';

describe('GET /', () => {
  describe('success', () => {
    it('returns a 200 upon success', async () => {
      await server
        .get('/')
        .set('Accept', 'application/json')
        .expect(HttpStatusCodes.OK);
    });

    it('returns the expected response', async () => {
      const response = await server
        .get('/')
        .set('Accept', 'application/json')
        .expect(HttpStatusCodes.OK);

      expect(response.body).toMatchObject({});
    });
  });

  describe('error', () => {
    it('returns the expected response code', async () => {
      await server
        .get('/')
        .query({ error: false })
        .set('Accept', 'application/json')
        .expect(HttpStatusCodes.OK);
    });
    it('returns the expected response code', async () => {
      await server
        .get('/')
        .query({ error: true })
        .set('Accept', 'application/json')
        .expect(HttpStatusCodes.INTERNAL_SERVER_ERROR);
    });

    it('returns the expected response body', async () => {
      await server
        .get('/')
        .query({ error: true })
        .set('Accept', 'application/json')
        .expect(HttpStatusCodes.INTERNAL_SERVER_ERROR);
    });
  });

  describe('delay', () => {
    it('sets a delay', async () => {
      const delay = 4000;
      const start = Date.now();

      await server
        .get('/')
        .query({ delay })
        .set('Accept', 'application/json')
        .expect(HttpStatusCodes.OK);

      const end = Date.now();
      const total = end - start;

      expect(total).toBeGreaterThanOrEqual(delay);
    });

    it('returns a 200 upon success', async () => {
      const delay = 500;
      await server
        .get('/')
        .query({ delay })
        .set('Accept', 'application/json')
        .expect(HttpStatusCodes.OK);
    });

    it('returns an error response after the delay', async () => {
      const delay = 500;
      await server
        .get('/')
        .query({ delay, error: true })
        .set('Accept', 'application/json')
        .expect(HttpStatusCodes.INTERNAL_SERVER_ERROR);
    });
  });
});
