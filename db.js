const Pool = require("pg").Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'la_maison_jungle',
  password: 'maisonjungle',
  port: 5432, // Port par défaut de PostgreSQL
});

module.exports = pool;
