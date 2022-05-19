import mongoose from 'mongoose';
import config from 'config';
import logger from "./logger"

async function connect() {
  const dbUrl = config.get<string>('dbUrl');

  try {
    await mongoose.connect(dbUrl);
    logger.info('Db connected');
  } catch (error) {
    logger.error('Could not found to db', error);
    process.exit(1);
  }
}

export default connect;
