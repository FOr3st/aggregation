module.exports = (err, req, res, next) => {
  res.status(500).send('Error getting requested data.');
};
