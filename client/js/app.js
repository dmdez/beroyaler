var angular = require('angular');
require('angular-route');
require('ng-img-crop/compile/minified/ng-img-crop.js');
angular.module('beRoyaler', ['ngImgCrop', 'ngRoute']);
require('./directives');
require('./services');
require('./config');
angular.bootstrap(document.body, ["beRoyaler"]);
