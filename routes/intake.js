// var router = require('express').Router();
// var pg= require('pg');
//
// var pool = new pg.Pool({
//   database: 'solo'
// });
//
// // router.get('/', function(req, res) {
// //
// //   pool.connect(function(err, client, done) {
// //     try {
// //       if (err) {
// //         console.log('Error connecting to DB, err');
// //         res.status(500).send(err);
// //       } else {
// //         client.query('SELECT * FROM intake;', function(err, results) {
// //           if (err) {
// //             console.log('Error getting intake', err);
// //             res.status(500).send(err);
// //           } else {
// //             res.send(result.rows);
// //           }
// //         });
// //       }
// //     } finally {
// //       done();
// //     }
// //   });
// // }); //end router.get
//
// // router.post('/', function(req, res) {
// //   console.log('in intake.post',req.body);
// //   res.send('chirp');
// //   // pool.connect(function(err, client, done) {
// //   //   try {
// //   //     if (err) {
// //   //       console.log('Error connecting to DB', err);
// //   //       res.status(500).send(err);
// //   //     } else {
// //   //       client.query(
// //   //         'INSERT INTO intake (date, time, volume) VALUES ($1, $2) RETURNING *;',
// //   //         function (err, results) {
// //   //           if (err) {
// //   //             console.log('Error getting intake', err);
// //   //             res.status(500).send(err);
// //   //           } else {
// //   //             res.send(result.rows);
// //   //           }
// //   //         });
// //   //     }
// //   //   } finally {
// //   //     done();
// //   //   }
// //   // });
// // }); //end router.post
//
// module.exports = router;
