var app = require('angular').module('beRoyaler');

app.directive('file', require('./file'));
app.directive('fileupload', ['upload', '$window', 'image', require('./fileupload')]);
app.directive('draggable', require('./draggable'));
