const express = require('express');
const Customer = require('../models/Customer');
const router = express.Router();

router.post('/', (req, res) =>
  Customer.create({
    name: req.body.name,
    employees: req.body.employees
  },
  (err, customer) => {
    if (err) throw new Error(err);
    res.json(customer);
  })
);

router.get('/', (req, res) =>
  Customer.find({}, (err, customers) => {
    if (err) throw new Error(err);
    res.json(customers);
  })
);

router.get('/:id', (req, res) =>
  Customer.findOne({_id: req.params.id}, (err, customer) => {
    if (err) throw new Error(err);
    res.json(customer);
  })
);

module.exports = router;
