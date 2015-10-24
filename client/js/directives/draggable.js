var Draggable = require('draggy');

module.exports = function() {
  return {
    restrict: 'A',
    scope: {
      x: '=',
      y: '='
    },
    link: function(scope, el, attrs, ngModel){
      var draggy = new Draggable( el[0], {
        within: 'parent'
      });
      draggy.on('dragend', function( event, pointer ) {
        var coords = draggy.getCoords();
        scope.$apply(function(){
          scope.x = coords[0];
          scope.y = coords[1];
        });
      });
    }
  };
};
