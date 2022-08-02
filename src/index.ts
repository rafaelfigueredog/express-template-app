import app from 'app';
import config from 'config';
import logger from 'utils/logger';


app.listen(config.port, () => {
  logger.info(`Accepting connections at: ${config.host}:${config.port}`);
});
