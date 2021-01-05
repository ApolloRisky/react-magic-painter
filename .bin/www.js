const path = require('path');
const express = require('express');
const compression = require('compression');

const argv = require('./argv');
const port = require('./port');
const logger = require('./logger');

const app = express();

const customHost = argv.host || process.env.HOST
const host = customHost || null;
const prettyHost = customHost || 'localhost';

const outputPath = path.resolve(process.cwd(), 'build');

app.use(compression({
  filter: function (req, res) {
    if (req.headers['x-no-compression']) {
      // don't compress responses with this request header
      return false;
    }
    // fallback to standard filter function
    return compression.filter(req, res);
  }
}));

app.use(express.static(outputPath));

app.get('/*', function (req, res) {
  res.sendFile(path.resolve(outputPath, 'index.html'));
});
// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});


app.listen(port, host, function (err) {
  if (err) {
    return logger.error(err.message)
  }
  return logger.appStarted(port, prettyHost)
});
