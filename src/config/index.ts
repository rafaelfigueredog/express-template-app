import 'dotenv/config';

const port = process.env.PORT || 8080;
const host = process.env.HOST || 'http://localhost';
const env = process.env.NODE_ENV || 'development';
const accessSecretToken: string = process.env.ACCESS_TOKEN_SECRET || '';
const refreshSecretToken: string = process.env.REFRESH_TOKEN_SECRET || '';
const clientURL: string = process.env.CLIENT_URL || '';

export default {
  port,
  host,
  env,
  accessSecretToken,
  refreshSecretToken,
  clientURL,
};
