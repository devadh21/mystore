
import sqlite3 from "sqlite3";
import { open} from "sqlite";



async function dbConnect() {
  const connection = await open({
    filename: "./database.db",       // Specify the database file path
    driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
  });
  console.log("Connected to the SQlite database.");
  return connection
}

export default dbConnect;


