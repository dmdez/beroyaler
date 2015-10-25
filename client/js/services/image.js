module.exports = function($q) {
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
  }
}
