import mongoose from 'mongoose';
import config from 'config';

async function connect() {
  const dbUrl = config.get<string>('dbUrl');

  try {
    await mongoose.connect(dbUrl);
    console.log('Db connected');
  } catch (error) {
    console.error('Could not found to db', error);
    process.exit(1);
  }
}

export default connect;
