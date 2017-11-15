const axios = require('axios');

module.exports = (req, res, next) => {
  const host = `${req.protocol}://${req.get('host')}`;
  const queue = [];
  const pathNameMap = {};

  Object.keys(req.query).forEach(s => {
    let path = '/' + req.query[s];
    pathNameMap[path] = s;
    queue.push(axios.get(host + path));
  });

  Promise.all(queue)
    .then(results => res.json(Object.assign.apply({}, results.map(result => ({ [pathNameMap[result.request.path]]: result.data })))))
    .catch(e => res.status(500).send(e.response.statusText + ' ' + e.config.url));
};
