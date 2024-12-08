(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject =['MenuService', ];
function MyInfoController(MenuService) {
  var $ctrl = this;

  // $ctrl.menuItems = menuItemss;
  // console.log("Menu items inside MyInfoController: " + menuItems);

  $ctrl.users = MenuService.getUserDetails();
  console.log("Users inside My Info controller: " + JSON.stringify($ctrl.users));
  
  // $ctrl.part1 = $ctrl.users[0].menunumber.slice(0,1);
  // $ctrl.part2 = $ctrl.users[0].menunumber.slice(1);

 

  $ctrl.checkIfRegistered = MenuService.ifUserRegistered();


  MenuService.getFavoriteMenu().then(function(result){
    $ctrl.getFavMenu = result;
    console.log("fav menu: "+ JSON.stringify($ctrl.getFavMenu));
  })
  .catch(function(error){
    console.log("error");
  });
  
}


})();