module.exports = function($q) {
  this.x = 0;
  this.y = 0;

  this.getTargetWidth = function() {
    return this.fbimage ? 480 : 400;
  };

  this.load = function(file) {

    var deferred = $q.defer();

    loadImage.parseMetaData(file, function (data) {
      var opts = { canvas: true };

      if (data.exif) {
        opts.orientation = data.exif.get('Orientation');
      }

      loadImage(file, function (img) {
        deferred.resolve(img.toDataURL());
      }, opts );
    });

    return deferred.promise;
  };

  this.getCropped = function() {
    return this.cropped || this.fbimage;
  };

  this.canAddLogo = function() {
    var deferred = $q.defer();
    if (this.data || this.fbimage) {
      deferred.resolve();
    } else {
      deferred.reject("noimage");
    }
    return deferred.promise;
  }

  this.canCrop = function() {
    var deferred = $q.defer();
    if (this.data) {
      deferred.resolve();
    } else {
      deferred.reject("noimage");
    }
    return deferred.promise;
  }
}
