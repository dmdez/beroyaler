module.exports = function($q) {
  this.x = 0;
  this.y = 0;

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

  this.exists = function() {
    var deferred = $q.defer();
    if (this.data) {
      deferred.resolve();
    } else {
      deferred.reject("noimage");      
    }
    return deferred.promise;
  }
}
