import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = process.env.MONGO_URL;

export const allCollectionName={
  serviceCollection: 'services',
  userCollection: 'users'
}
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default async function dbConnect(dbCollectionName) {
  await client.connect();
  return client.db(process.env.DB_NAME).collection(dbCollectionName);
}
