module.exports = function handler(req, res) {
  res.statusCode = 410;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.end('This website has been removed by its owner.');
};
