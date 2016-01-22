var core = require('@gautamarora/core');

module.exports.init = function (app) {
  console.log('blog self init');
  core.registerRoutes(__dirname, 'routes', app);
  core.registerPartials(__dirname, 'partials', 'gallery');
};