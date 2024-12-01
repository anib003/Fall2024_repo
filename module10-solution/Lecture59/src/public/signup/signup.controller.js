(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject =['MenuService'];
function SignUpController(MenuService) {
  var $ctrl = this;

  
  
  $ctrl.validate = function(){
    MenuService.validateMenuNumber($ctrl.user.menunumber)
    .then(function(result){
      console.log("Result: "+ result);
      
      if(result.trim() == "valid"){
        $ctrl.isMenuValid = true;
        console.log("$ctrl.isMenuValid: "+ $ctrl.isMenuValid);
       
      }
      else{
        $ctrl.isMenuValid = false;
        console.log("$ctrl.isMenuValid: "+ $ctrl.isMenuValid);
      }
    })
    .catch(function(error){
      $ctrl.isMenuValid = false;
        console.log("$ctrl.isMenuValid: "+ $ctrl.isMenuValid);
    });
  };


  $ctrl.saveInfo = function(){

    $ctrl.completed = true;
    console.log("first name:" + $ctrl.user.firstname);
    console.log("menu number:" + $ctrl.user.menunumber);


    if($ctrl.isMenuValid){
      MenuService.saveRegistrationDetails($ctrl.user);
      console.log("User details saved"); 
    }
    else{
       console.log("User details NOT saved"); 
    }
    
  };
  
}


})();