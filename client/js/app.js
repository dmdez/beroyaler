var angular = require('angular');
require('ng-img-crop/compile/minified/ng-img-crop.js');
angular.module('beRoyaler', ['ngImgCrop']);
require('./directives');
require('./services');
angular.bootstrap(document.body, ["beRoyaler"]);
