var app = require('angular').module('beRoyaler');

app.config(['$routeProvider', require('./routes')]);
app.run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(evt,current,previous,rejection){
    $location.path('/');
  });
}]);
