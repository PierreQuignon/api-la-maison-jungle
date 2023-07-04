const Pool = require("pg").Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'la-maison-jungle',
  password: 'maisonjungle123',
  port: 5432, // Port par défaut de PostgreSQL
});

module.exports = pool;
