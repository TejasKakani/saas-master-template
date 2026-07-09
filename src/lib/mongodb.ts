// /src/lib/mongodb.ts
import { MongoClient, type MongoClientOptions } from "mongodb";

const uri = process.env.MONGODB_URI;
const options: MongoClientOptions = {};

if (!uri) {
  // We don't throw here so the template still boots without a DB configured.
  // submitLead.ts checks for this and falls back to console logging.
  console.warn(
    "[mongodb] MONGODB_URI is not set — lead capture will log to console only."
  );
}

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient> | undefined;

if (uri) {
  if (process.env.NODE_ENV === "development") {
    // In dev, Next.js hot-reloads modules, which would otherwise create a
    // new MongoClient (and a new connection) on every file save. Caching it
    // on the global object survives the reload.
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    // In production, one client per server instance is fine.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
}

export default clientPromise;