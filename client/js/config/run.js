module.exports = function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(evt,current,previous,rejection){
    $location.path('/');
  });
}
