module.exports = function() {
  return {
    restrict: 'A',
    scope: {
      x: '=',
      y: '='
    },
    link: function(scope, el, attrs, ngModel){

      var draggy = new Draggy(el[0], {
        bindTo: el.parent()[0],
        width: parseFloat(attrs.width),
        height: parseFloat(attrs.height),
        onChange: function(x, y) {
          scope.x = x;
          scope.y = y;
          scope.$apply();
        }
      });
      return;
    }
  };
};
