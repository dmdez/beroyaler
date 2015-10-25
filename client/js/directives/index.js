var app = require('angular').module('beRoyaler');

app.directive('file', require('./file'));
app.directive('fileupload', ['upload', '$window', 'image', require('./fileupload')]);
app.directive('draggable', require('./draggable'));
app.directive('imagecrop', ['image', '$location', require('./imagecrop')]);
app.directive('imageadd', ['image', '$location', require('./imageadd')]);
app.directive('imagelogo', ['image', 'upload', '$window', require('./imagelogo')]);
