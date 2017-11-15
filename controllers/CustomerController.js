const express = require('express');
const Customer = require('../models/Customer');
const router = express.Router();

router.post('/', (req, res, next) =>
  Customer.create({
    name: req.body.name,
    employees: req.body.employees
  },
  (err, customer) => {
    if (err) return next(err);
    res.json(customer);
  })
);

router.get('/', (req, res, next) =>
  Customer.find({}, (err, customers) => {
    if (err) return next(err);
    res.json(customers);
  })
);

router.get('/:id', (req, res, next) =>
  Customer.findOne({_id: req.params.id}, (err, customer) => {
    if (err) return next(err);
    res.json(customer);
  })
);

module.exports = router;
