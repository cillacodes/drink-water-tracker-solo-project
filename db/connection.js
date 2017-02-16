var pg = require('pg');

var pool = new pg.Pool({
  database: 'solo'
});

module.exports = pool;
