var app = require('angular').module('beRoyaler');

app.service('upload', ['$http', '$q', 'imageService', require('./upload')]);
app.service('imageService', ['$q', require('./image')]);
app.service('facebook', ['facebookConfig', 'facebookService', '$q', require('./facebook')]);
