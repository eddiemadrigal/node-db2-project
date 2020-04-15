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

router.post('/', (req, res) => { // insert into cars
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

router.get('/:id', (req, res) => { // select * from cars where id = 
  const id = req.params.id;
  db('cars')
  .where({ id })
  .select('*')
  .then( cars => {
    res.status(200).json({ data: cars })
  })
  .catch( err => {
    console.log( err );
    res.status(500).json({ error: err.message })
  })
});

router.put('/:id', (req, res) => {
  const changes = req.body;
  const id = req.params.id;
  db('cars')
    .where ({ id })
    .update ( changes )
    .then( cars => {
      res.status(200).json({ data: cars });
    })
    .catch( err => {
      console.log( err );
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;