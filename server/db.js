const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "clv2-dev",
  password: "19899130",
  post: 5432
});

module.exports = pool;
