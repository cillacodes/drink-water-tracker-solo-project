var router = require('express').Router();
var path = require('path');
var bodyParser = require('body-parser');

var pg= require('pg');

var pool = new pg.Pool({
  database: 'solo'
});

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/daily', function(req, res) {

  pool.connect(function(err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to DB, err');
        res.status(500).send(err);
      } else {
        client.query('SELECT * FROM intake;', function(err, results) {
          if (err) {
            console.log('Error getting intake', err);
            res.status(500).send(err);
          } else {
            res.send(results.rows);
          }
        });
      }
    } finally {
      done();
    }
  });
}); //end router.get

router.post( '/addIntake', function( req, res ){
  console.log( 'in base url post:', req.body );
  // console.log('req', req);

  pool.connect(function(err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to DB', err);
        res.status(500).send(err);
      } else {
        client.query(
          'INSERT INTO intake (date, time, volume) VALUES ($1, $2, $3) RETURNING *;',
          [req.body.date, 'now()', req.body.volume],
          function (err, results) {
            if (err) {
              console.log('Error getting intake', err);
              res.status(500).send(err);
            } else {
              res.send(results.rows);
            }
          });
        }
      } finally {
        done();
      }
    });
  });

module.exports = router;
