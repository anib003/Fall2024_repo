(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['MenuDataService', 'itemsforcategories'];
function ItemDetailController(MenuDataService, itemsforcategories) {
  var itemDetail = this;
  itemDetail.itemsforcategories = itemsforcategories;
  itemDetail.menuItems = itemDetail.itemsforcategories["menu_items"];

  console.log("Menu items: "+ itemDetail.menuItems);
 
}

})();