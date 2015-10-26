var templateUrl = require('ngtemplate!html!./imagecrop.html');

module.exports = function(imageService, $location) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: templateUrl,
    link: function (scope) {
      scope.cropped = '';
      scope.image = imageService.data;
      scope.done = function() {
        imageService.cropped = scope.cropped;
        $location.path( "/logo" );
      };
    }
  };
};
