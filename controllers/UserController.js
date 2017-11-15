const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/', (req, res, next) =>
  User.create({
    name: req.body.name,
    email: req.body.email
  },
  (err, user) => {
    if (err) return next(err);
    res.json(user);
  })
);

router.get('/', (req, res, next) =>
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.json(users);
  })
);

router.get('/:id', (req, res, next) =>
  User.findOne({_id: req.params.id}, (err, user) => {
    if (err) return next(err);
    res.json(user);
  })
);

module.exports = router;
