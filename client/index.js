var core = require('@gautamarora/core');
var header = require('@gautamarora/header');
var homepage = require('@gautamarora/homepage');
var post = require('@gautamarora/post');
var photo = require('@gautamarora/photo');
var profile = require('@gautamarora/profile');
var self = require('./self');

module.exports.init = function() {
  core.init();
  header.init();
  homepage.init();
  post.init();
  photo.init();
  profile.init();
  self.init();
}();