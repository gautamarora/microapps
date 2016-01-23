var core = require('@gautamarora/core');
var header = require('@gautamarora/header');

module.exports.init = function (app) {
  console.log('blog self init');
  core.registerRoutes(__dirname, 'routes', app);
  core.registerPartials(__dirname, 'partials', 'gallery');
  header.setInitialState({"topbar":{"title": "My Blog"}});
};