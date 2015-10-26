module.exports = function($http, $q) {
  this.uploadFileToUrl = function(image){
    var deferred = $q.defer();
    var ratio = 400/300
    var x = Math.round(image.x * ratio);
    var y = Math.round(image.y * ratio);

    var data = {
      timestamp: Date.now(),
      upload_preset: 'xjkacs1n',
      folder: 'beroyaler',
      eager: 'l_royals_s97dxe,g_north_west,w_200,x_' + x + ',y_' + y
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
      fd.append('file', image.cropped);
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
