module.exports = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500).send('Error getting requested data.');
};
