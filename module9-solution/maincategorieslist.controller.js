(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesListController', MainCategoriesListController);


MainCategoriesListController.$inject = ['MenuDataService', 'category'];
function MainCategoriesListController(MenuDataService, category) {
  var mainCategoriesList = this;
 // mainCategoriesList.categories = JSON.stringify(category, null, 2); 
  mainCategoriesList.categories = category; 
  console.log("categories: " + mainCategoriesList.categories);

  mainCategoriesList.newCategories = mainCategoriesList.categories["data"];
  console.log("new categories: " + mainCategoriesList.newCategories);
}

})();