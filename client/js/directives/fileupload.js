
module.exports = function(upload, $window, image) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'fileupload.html',
    link: function (scope) {
      scope.image = {
        data: '',
        cropped: '',
        x: 0,
        y: 0
      };

      scope.step = 'upload';
      scope.preview = false;

      scope.$watch("file", function(file) {
        if ( file ) {
          scope.loading = true;

          image.load(file).then(function(image) {
            scope.image.data = image;
            scope.loading = false;
            scope.goToStep('crop');
          });
        }
      });

      scope.goToStep = function(step) {
        scope.step = step;
      };

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
