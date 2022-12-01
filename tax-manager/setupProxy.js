const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
    },{
      target: 'http://46.28.110.196:8000',
      changeOrigin: true,
    })
  );
};