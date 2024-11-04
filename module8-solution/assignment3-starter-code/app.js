(function(){

'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);



function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true,
    link: FoundItemsDirectiveLink
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService', '$scope'];
function NarrowItDownController(MenuSearchService, $scope){
	var menu = this;
	$scope.searchTerm = "";

	$scope.found = [];
	menu.getMenuItems = function(searchTerm){
		var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
		promise.then(function (response) {
		menu.found = JSON.stringify(response, null, 2); 
		console.log("Inside controller: foundItems: " + menu.found);
  	})
  	.catch(function (error) {
    	console.log("Something went terribly wrong.");
  	});
	};

		
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
	var service = this;
	

	service.getMatchedMenuItems = function (searchTerm) {
		var foundItems =[];
    	return $http({
     		method: "GET",
      		url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json",})
    		.then(function (response) {
		
    	    	for (var key in response.data) {
    	    		for(var i=0; i<response.data[key].menu_items.length; i++){
    	    			var search = response.data[key].menu_items[i].name.toLowerCase();

      					if (search.includes(searchTerm.toLowerCase())) {
       		 				foundItems.push(response.data[key].menu_items[i]); 
      					}	
     			 	}
      			}
      			console.log(foundItems);
      			return foundItems;
  	})
  	.catch(function (error) {
    	console.log("Something went terribly wrong.");
  	});

    	
  	};




}






})();