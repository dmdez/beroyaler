var templateUrl = require('ngtemplate!html!./imagelogo.html');

module.exports = function(imageService, upload, $window) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: templateUrl,
    link: function (scope) {
      scope.image = imageService;
      scope.selectedLogo = scope.image.logoOptions[0];
      scope.$watch("selectedLogo", function(val) {
        console.log(val);
      });
      scope.upload = function() {
        scope.loading = true;
        upload.uploadFileToUrl({
          logo: scope.selectedLogo
        }).then(function(data) {
          var id = data.public_id.split("/")[1];
          $window.location = "/profile/" + id;
        });
      };

      scope.selectLogo = function(logo) {
        scope.selectedLogo = logo;
      };
    }
  };
};
