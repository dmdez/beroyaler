var templateUrl = require('ngtemplate!html!./imagelogo.html');

module.exports = function(imageService, upload, $window) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: templateUrl,
    link: function (scope) {
      scope.image = imageService;
      scope.upload = function() {
        scope.loading = true;
        upload.uploadFileToUrl(scope.image).then(function(data) {
          var id = data.public_id.split("/")[1];
          $window.location = "/profile/" + id;
        });
      }
    }
  };
};
