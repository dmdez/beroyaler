var app = require('angular').module('beRoyaler');

app.config(['$routeProvider', require('./routes')]);
app.config(['facebookConfigProvider', require('./facebook')]);
app.run(['$rootScope', '$location', require('./run')]);
