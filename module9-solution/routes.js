(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'home.template.html'
  })

  .state('mainCategoriesList', {
    url: '/main-categories-list',
    templateUrl: 'main-categorieslist.template.html',
    controller: 'MainCategoriesListController as mainCategoriesList',
    resolve: {
      category: ['MenuDataService', function (MenuDataService) {
        console.log("Inside state"+MenuDataService.getAllCategories());
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('mainCategoriesList.itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'item-detail.template.html',
    controller: "ItemDetailController as itemDetail",
    resolve: {
      itemsforcategories: ['MenuDataService', function (MenuDataService) {
        console.log("short_name: "+ itemId);
        return MenuDataService.getItemsForCategory(itemId);
      }]
    }
  });

}

})();
