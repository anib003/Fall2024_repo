(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject =['MenuService'];
function MyInfoController(MenuService) {
  var $ctrl = this;

  $ctrl.menuItems = MenuService.getMenuItems();

  $ctrl.users = MenuService.getUserDetails();
  console.log("Users inside My Info controller: " + JSON.stringify($ctrl.users));
  
  $ctrl.checkIfRegistered = MenuService.ifUserRegistered();


  // MenuService.getFavoriteMenu().then(function(result){
  //   $ctrl.getFavMenu = result.data;
  //   console.log("fav menu: "+ $ctrl.getFavMenu);
  // })
  // .catch(function(error){
  //   console.log("error");
  // });
  
}


})();