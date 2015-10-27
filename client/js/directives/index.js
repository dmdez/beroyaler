var app = require('angular').module('beRoyaler');

app.directive('file', require('./file'));
app.directive('draggable', require('./draggable'));
app.directive('imagecrop', ['imageService', '$location', require('./imagecrop')]);
app.directive('imageadd', ['imageService', '$location', 'facebook', require('./imageadd')]);
app.directive('imagelogo', ['imageService', 'upload', '$window', require('./imagelogo')]);
