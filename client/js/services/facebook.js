module.exports = function(facebookConfig, facebookService, $q) {
  this.picture = function() {
    var deferred = $q.defer();

    var queryPicture = function() {
      facebookService.api('/me/picture?height=400').then(function (response) {
        if ( response.data && response.data.url ) {
          deferred.resolve(response.data.url);
        } else {
          deferred.reject();
        }        
      });
    }

    facebookService.getLoginStatus().then(function(response) {
      if ( response.status == "connected" ) {
        queryPicture();
      } else {
        facebookService.login({scope: 'public_profile'}).then(function() {
          queryPicture();
        });
      }
    });

    return deferred.promise;

  };
}
