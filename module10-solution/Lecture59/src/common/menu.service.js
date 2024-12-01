(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.users = [];
  service.urlDetails = "";

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data;
    });
  };

  service.saveRegistrationDetails = function(userObj){
    service.users = [];
    var user = {
    firstname: userObj.firstname,
    lastname: userObj.lastname,
    email:userObj.email,
    phone:userObj.phone,
    menunumber:userObj.menunumber
    };

    service.users.push(user);
    console.log("Users: " + JSON.stringify(service.users));
  };

  
  service.validateMenuNumber = function(menunumber){
    var firstLetter = menunumber.charAt(0);
    var secondLetter ;
    if(menunumber.length ===3){
      secondLetter = menunumber.slice(1,3);
    }
    else{
      secondLetter = menunumber.slice(1,2);
    }

    console.log("first letter: " + firstLetter);
    console.log("second letter: " + secondLetter);

    var second = parseInt(secondLetter)-1;

    service.urlDetails = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/"+firstLetter +"/menu_items/"+ second +".json";
    console.log("URL details: " +service.urlDetails );

    var response1 = $http({
        method: "GET",
          url: service.urlDetails })
        .then(function(response){
          if(response.data === null){
            console.log("null!!!");
            return "null";
          }
          else{
            console.log("valid!!!");
            return "valid";
          }
        })
        .catch(function(error){
          console.log("error!!!");
          return "error";
        });

    return response1;
  };

  service.getFavoriteMenu = function(){
    return $http({
        method: "GET",
          url: service.urlDetails })
        .then(function(response){
         console.log("valid!!");
        })
        .catch(function(error){
          console.log("error!!");
        });

   
  };

  service.getUserDetails = function(){
    return service.users;
  };

  service.ifUserRegistered = function(){
    if(service.users.length ===0){
      return false;
    }
    else{
      return true;
    }
  };


}



})();
