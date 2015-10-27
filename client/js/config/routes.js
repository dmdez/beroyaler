module.exports = function($routeProvider) {

  $routeProvider.
    when('/', {
      template: '<imageadd></imageadd>'
    }).
    when('/crop', {
      template: '<imagecrop></imagecrop>',
      resolve: {
        image: ['imageService', function(imageService){
          return imageService.canCrop();
        }]
      }
    }).
    when('/logo', {
      template: '<imagelogo></imagelogo>',
      resolve: {
        image: ['imageService', function(imageService){
          return imageService.canAddLogo();
        }]
      }
    }).
    otherwise({
      redirectTo: '/'
    });
}
