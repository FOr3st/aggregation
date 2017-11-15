// const axios = require('axios');
const http = require('http');

module.exports = (req, res, next) => {
  const parts = req.get('host').split(':');
  const queue = [];
  const pathNameMap = {};

  const options = {
    hostname: parts[0],
    port: parts[1],
    headers: req.headers,
    timeout: 2000
  };

  res.setHeader('Content-Type', 'application/json');
  res.write('{');

  const loadResource = (name, res, options) =>
    new Promise((resolve, reject) => {
      http.get(options, response => {
        res.write(`"${name}":`);
        response.on('data', chunk => res.write(chunk));
        response.on('end', () => resolve());
        response.on('error', e => reject(e));
      });
    })

  const tasks = Object.keys(req.query).map(key => () => loadResource(key, res, Object.assign({}, options, {path: '/' + req.query[key]})));

  tasks.reduce(
    (promise, task) => promise.then(() => (tasks[tasks.length - 1] === task) ? task() : task().then(() => res.write(','))),
    Promise.resolve()
  ).then(() => { res.write('}'); res.send(); });
};
