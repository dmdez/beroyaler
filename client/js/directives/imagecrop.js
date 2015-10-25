
module.exports = function(imageService, $location) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'imagecrop.html',
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
