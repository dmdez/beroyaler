module.exports = function($http, $q, imageService) {
  this.uploadFileToUrl = function(opts){
    var deferred = $q.defer();
    var ratio = imageService.getTargetWidth()/300
    var x = Math.round(imageService.x * ratio);
    var y = Math.round(imageService.y * ratio);
    var width = Math.round(opts.logo.cssWidth * ratio);

    var data = {
      timestamp: Date.now(),
      upload_preset: 'xjkacs1n',
      folder: 'beroyaler',
      eager: 'l_' + opts.logo.imageId + ',g_north_west,w_' + width + ',x_' + x + ',y_' + y
    };

    var fd = new FormData();
    for ( var key in data ) {
      fd.append(key, data[key]);
    }

    $http({
      url: '/signature',
      params: data,
      method: "GET"
    }).then(function(response) {
      var signature = response.data.signature;
      var api_key = response.data.api_key;
      var api_url = response.data.api_url;

      fd.append('signature', signature);
      fd.append('file', imageService.getCropped());
      fd.append('api_key', api_key);

      $http.post(api_url, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      })
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(){
        deferred.reject();
      });

    });

    return deferred.promise;
  };
};
