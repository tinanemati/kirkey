import pg from 'pg';
const { Pool } = pg;

// Create a new pool using the connection string for your local PostgreSQL database
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydatabase',
  port: 5432,
});

export default pool;