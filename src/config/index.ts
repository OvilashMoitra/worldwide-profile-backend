/* eslint-disable no-undef */
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
