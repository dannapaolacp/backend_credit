// Import the Pool class from the 'pg' (PostgreSQL) library
const { Pool } = require('pg');

// Import secure-env for securely loading environment variables
const secureEnv = require("secure-env");

// Load environment variables from a .env file
require("dotenv").config();

// Securely load environment variables using the secret key
global.env = secureEnv({
    secret: process.env.SECRET_KEY, 
});

// Create a new pool of database connections using the connection string from the environment
const pool = new Pool({
  connectionString: global.env.DATABASE_URL,
});

// Export a query function that uses the pool to interact with the database
module.exports = {
  query: (text, params) => pool.query(text, params), 
};
