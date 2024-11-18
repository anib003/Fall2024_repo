(function(){

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'categories.template.html',
  controller: CategoriesListComponentController,
  bindings: {
    categories: '<'

  }
});


CategoriesListComponentController.$inject = ['MenuDataService']
function CategoriesListComponentController(MenuDataService) {
var $ctrl = this;




}

})();