const express = require('express');
const Country = require('../models/Country');
const router = express.Router();

router.post('/', (req, res, next) =>
  Country.create({
    name: req.body.name,
    code: req.body.code
  },
  (err, country) => {
    if (err) return next(err);
    res.json(country);
  })
);

router.get('/', (req, res, next) =>
  Country.find({}, (err, countries) => {
    if (err) return next(err);
    res.json(countries);
  })
);

router.get('/:id', (req, res, next) =>
  Country.findOne({_id: req.params.id}, (err, country) => {
    if (err) return next(err);
    res.json(country);
  })
);

module.exports = router;
