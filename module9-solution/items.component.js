(function(){

angular.module('MenuApp')
.component('items', {
  templateUrl: 'item.template.html',
  
  bindings: {
    itemsforcategories: '<'
   
  }
});



})();