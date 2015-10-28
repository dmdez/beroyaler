module.exports = function($q) {
  this.x = 0;
  this.y = 0;

  this.logoOptions = [
    {
      id: 'alc',
      imageId: 'alc_rrkb4t',
      src: "http://res.cloudinary.com/dmdez/image/upload/v1445878970/alc_rrkb4t.png",
      width: 200,
      cssWidth: 150,
      cssHeight: 110
    },
    {
      id: 'royals',
      imageId: 'royals_hq9i0s',
      src: "http://res.cloudinary.com/dmdez/image/upload/v1446045592/royals_hq9i0s.png",
      width: 202,
      cssWidth: 152,
      cssHeight: 86
    },
    {
      id: 'crown',
      imageId: 'crown_le9pvd',
      src: "http://res.cloudinary.com/dmdez/image/upload/v1446045592/crown_le9pvd.png",
      width: 166,
      cssWidth: 125,
      cssHeight: 140
    },
    {
      id: 'kc',
      imageId: 'kc_iepyha',
      src: "http://res.cloudinary.com/dmdez/image/upload/v1446045592/kc_iepyha.png",
      width: 130,
      cssWidth:98,
      cssHeight: 99
    },
    {
      id: 'believe',
      imageId: 'believe_snr3wv',
      src: "http://res.cloudinary.com/dmdez/image/upload/v1446045592/believe_snr3wv.png",
      width: 210,
      cssWidth: 158,
      cssHeight: 57
    }
  ];

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
