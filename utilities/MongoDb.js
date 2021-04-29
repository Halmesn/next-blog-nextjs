import { MongoClient } from 'mongodb';

export const connectDatabase = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
  });

  return client;
};

export const insertDocument = async (collection, client, documents) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(documents);
  return result;
};
