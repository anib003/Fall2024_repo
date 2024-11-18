(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['MenuDataService', 'category'];
function CategoriesListController(MenuDataService, category) {
  var categoriesList = this;
  categoriesList.categories = category;

  console.log("CATEGORIES: " + categoriesList.categories);

  console.log(MenuDataService);
}

})();