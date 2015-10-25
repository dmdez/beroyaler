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
        onChange: function(x, y) {
          scope.$apply(function(){
            scope.x = x;
            scope.y = y;
          });
        }
      });
      return;
    }
  };
};
