var templateUrl = require('ngtemplate!html!./imageadd.html');

module.exports = function(imageService, $location, facebook) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: templateUrl,
    link: function (scope) {

      scope.getFBPic = function() {
        facebook.picture().then(function(pic) {
          imageService.fbimage = pic;
          scope.loading = false;
          $location.path( "/logo" );
        });
      };

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
