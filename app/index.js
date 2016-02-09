var core = require('@gautamarora/core');
var header = require('@gautamarora/header');
var homepage = require('@gautamarora/homepage');
var post = require('@gautamarora/post');
var photo = require('@gautamarora/photo');
var profile = require('@gautamarora/profile');
var self = require('./self');

exports.initBrowserify = core.initBrowserify;
exports.initBrowserifyOptions = core.initBrowserifyBundleOpts;

exports.init = function(app, express) {
  console.log('blog app init');
  //TODO: Find a better way to init the sass compile
  core.initSass(__dirname); //register root for sass compile
  core.init(app, express);
  header.init(app, express);
  homepage.init(app, express);
  post.init(app, express);
  photo.init(app, express);
  profile.init(app, express);
  self.init(app);
};