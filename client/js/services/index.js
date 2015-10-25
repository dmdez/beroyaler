var app = require('angular').module('beRoyaler');

app.service('upload', ['$http', '$q', require('./upload')]);
app.service('image', ['$q', require('./image')]);
