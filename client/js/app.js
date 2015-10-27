var angular = require('angular');
require('angular-route');
require('ng-img-crop/compile/minified/ng-img-crop.js');
require('angularjs-facebook-sdk/dist/angularjs-facebook-sdk.min.js');
angular.module('beRoyaler', ['ngImgCrop', 'ngRoute', 'angularjs-facebook-sdk']);
require('./directives');
require('./services');
require('./config');
angular.bootstrap(document.body, ["beRoyaler"]);
