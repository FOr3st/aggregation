const express = require('express');
const Country = require('../models/Country');
const router = express.Router();

router.post('/', (req, res) =>
  Country.create({
    name: req.body.name,
    code: req.body.code
  },
  (err, country) => {
    if (err) throw new Error(err);
    res.json(country);
  })
);

router.get('/', (req, res) =>
  Country.find({}, (err, countries) => {
    if (err) throw new Error(err);
    res.json(countries);
  })
);

router.get('/:id', (req, res) =>
  Country.findOne({_id: req.params.id}, (err, country) => {
    if (err) throw new Error(err);
    res.json(country);
  })
);

module.exports = router;
