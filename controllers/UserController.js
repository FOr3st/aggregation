const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/', (req, res) =>
  User.create({
    name: req.body.name,
    email: req.body.email
  },
  (err, user) => {
    if (err) throw new Error(err);
    res.json(user);
  })
);

router.get('/', (req, res) =>
  User.find({}, (err, users) => {
    if (err) throw new Error(err);
    res.json(users);
  })
);

router.get('/:id', (req, res) =>
  User.findOne({_id: req.params.id}, (err, user) => {
    if (err) throw new Error(err);
    res.json(user);
  })
);

module.exports = router;
