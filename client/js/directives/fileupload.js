module.exports = function(upload, $window) {
  return {
    restrict: 'E',
    replace: true,
    template: `
    <div>
      <div ng-hide="loading">
        <div ng-show="step == 'upload'">
          <div class="fileField">
            <input type="file" id="addfile" ng-model="file" file />
            <label for="addfile" class="button">Add Photo</label>
          </div>
        </div>
        <div ng-show="step == 'crop'">
          <div  class="cropContainer">
            <div class="cropArea">
              <img-crop image="image.data" result-image-format="image/jpeg" result-image="image.cropped" result-image-size="400" area-type="square"></img-crop>
            </div>
            <div class="button" ng-click="goToStep('logo')">Done Cropping</div>
            <div>
              <a ng-click="goToStep('upload')">Change Photo</a>
            </div>
          </div>
        </div>
        <div ng-show="step == 'logo'">
          <div class="preview">
            <img ng-src="{{image.cropped}}" />
            <div draggable x="image.x" y="image.y" class="logo">
              <img src="http://res.cloudinary.com/dmdez/image/upload/v1445541588/royals_s97dxe.png" />
            </div>
          </div>
          <div class="button" ng-click="upload()">Upload</a>
        </div>
      </div>
      <div ng-show="loading">
        Uploading image...
      </div>
    </div>
    `,
    link: function (scope) {
      scope.image = {
        data: '',
        cropped: '',
        x: 0,
        y: 0
      };

      scope.step = 'upload';
      scope.preview = false;

      scope.$watch("image.x", function(val) {
        console.log(val);
      });

      scope.$watch("file", function(file) {
        if ( file ) {
          var reader = new FileReader();
          reader.onload = function (evt) {
            scope.$apply(function($scope){
              scope.image.data = evt.target.result;
            });
          };
          reader.readAsDataURL(file);
          scope.goToStep('crop');
        }
      });

      scope.goToStep = function(step) {
        scope.step = step;
      };

      scope.upload = function() {
        scope.loading = true;
        upload.uploadFileToUrl(scope.image).then(function(data) {
          var id = data.public_id.split("/")[1];
          $window.location = `/image/${id}`;
        });
      }
    }
  };
};
