const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Hello from /GET /api/cars endpoint')
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.status(200).send(`Hello from /GET /api/cars/${id} endpoint`);
})

router.post('/', (req, res) => {
  res.status(200).send(`Hello from /POST /api/cars endpoint`)
});

module.exports = router;