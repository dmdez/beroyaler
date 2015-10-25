var cloudinary = require('cloudinary');
var S = require('string');
var q = require('q');

exports.get = function(id) {
  var deferred = q.defer();

  cloudinary.api.resource('beroyaler/' + id, function(result)  {

    var url = "";

    if ( result.derived ) {
      result.derived.forEach(function(image) {
        if ( S(image.transformation).startsWith("l_") ) {
          deferred.resolve(image);
        }
      });
      deferred.resolve(result);
    } else {
      deferred.reject();
    }

  });

  return deferred.promise;

}
