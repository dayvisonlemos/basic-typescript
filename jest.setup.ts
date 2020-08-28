import supertest from 'supertest';
import Server from './src/server';

const server = new Server();

global.request = supertest(server.getApp());
