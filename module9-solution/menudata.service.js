(function(){

'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject=['$http']
function MenuDataService($http){
	var service = this;

	service.getAllCategories = function(){
		
		var promise = $http({
     	method: "GET",
      	url: "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"
    	});

		console.log("getAllCategories promise: " + promise);
    	return promise;

	};


	service.getItemsForCategory = function(categoryShortName){
		
		var promise = $http({
     	method: "GET",
      	url: ("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + categoryShortName + ".json")
    	});

    	console.log("getItemsForCategory promise: " + promise);
    	return promise;
	};
}



})();