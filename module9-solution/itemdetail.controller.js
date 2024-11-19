(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['$stateParams','MenuDataService', 'itemsforcategory'];
function ItemDetailController($stateParams, MenuDataService, itemsforcategory) {
  var itemDetail = this;
 // itemDetail.itemsforcategories = JSON.stringify(itemsforcategory, null, 2);

  itemDetail.itemsforcategories = itemsforcategory["data"];
  console.log("Items for category: "+ JSON.stringify(itemDetail.itemsforcategories, null, 2));

  itemDetail.menuItems = itemDetail.itemsforcategories["menu_items"];
  console.log("Menu items: "+ JSON.stringify(itemDetail.menuItems, null, 2));

  itemDetail.mainCategory = itemDetail.itemsforcategories["category"]["name"];
  console.log("Category: " + itemDetail.mainCategory);
}

})();