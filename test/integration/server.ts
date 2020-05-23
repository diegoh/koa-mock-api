import * as supertest from 'supertest';
import app from '../../src/app';

export const server = supertest(app.callback());
