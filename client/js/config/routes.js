module.exports = function($routeProvider) {
  var resolveImage = {
    image: ['image', function(image){
      return image.exists();
    }]
  };

  $routeProvider.
    when('/upload', {
      template: '<imageadd></imageadd>'
    }).
    when('/crop', {
      template: '<imagecrop></imagecrop>',
      resolve: resolveImage
    }).
    when('/logo', {
      template: '<imagelogo></imagelogo>',
      resolve: resolveImage
    }).
    otherwise({
      redirectTo: '/upload'
    });
}
