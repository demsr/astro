import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  host: "postgres",
  port: 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: "postgres",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

pool.on("error", function (error) {
  console.log("PG Error: ", error);
});

export default pool;
