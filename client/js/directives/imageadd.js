
module.exports = function(imageService, $location) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'imageadd.html',
    link: function (scope) {
      scope.$watch("file", function(file) {
        if ( file ) {
          scope.loading = true;

          imageService.load(file).then(function(image) {
            imageService.data = image;
            scope.loading = false;
            $location.path( "/crop" );
          });
        }
      });
    }
  };
};
