const express = require('express');

const db = require('../data/dbConfig.js')

const router = express.Router();

router.get('/', (req, res) => { // select * from cars
  db
    .select('*')
    .from('cars')
    .then( cars => {
      res.status(200).json({ data: cars })
    })
    .catch( err => {
      console.log( err );
      res.status(500).json({ error: err.message });
    });
});

router.post('/', (req, res) => {
  const postData = req.body;
  db('cars')
  .insert( postData )
  .then ( cars => {
    res.status(200).json({ data: cars });
  })
  .catch( err => {
    console.log( err );
    res.status(500).json({ error: err.message });
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.status(200).send(`Hello from /GET /api/cars/${id} endpoint`);
})

router.post('/', (req, res) => {
  res.status(200).send(`Hello from /POST /api/cars endpoint`)
});

module.exports = router;