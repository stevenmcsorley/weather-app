const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

async function testConnection() {
  const uri = "mongodb://mongo:27017/weatherapp";
  console.log("Attempting to connect to MongoDB with URI:", uri);
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB");
    const db = client.db();
    const collections = await db.listCollections().toArray();
    console.log("Available collections:", collections);

    // Test a simple operation
    const result = await db.command({ ping: 1 });
    console.log("Ping command result:", result);
  } catch (e) {
    console.error("Failed to connect to MongoDB");
    console.error("Error name:", e.name);
    console.error("Error message:", e.message);
    console.error("Full error:", e);
  } finally {
    await client.close();
  }
}

testConnection();
