(function(){

'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItemsDirective', FoundItemsDirective);



function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: ['$scope', function($scope) {
      $scope.$watch('foundItems', function(newValue) {
            if (newValue) {
                console.log('foundItems changed:', newValue);
            }
        });

    }],
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}



NarrowItDownController.$inject = ['MenuSearchService', '$scope'];
function NarrowItDownController(MenuSearchService, $scope){
	var menu = this;
	$scope.searchTerm = "";

	menu.foundItems =[];
	menu.getMenuItems = function(searchTerm){
		var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
		promise.then(function (response) {
		//$scope.foundItems = JSON.stringify(response, null, 2); 
		menu.foundItems = response;
		console.log("Inside controller: foundItems: " + menu.foundItems);
  	})
  	.catch(function (error) {
    	console.log("Something went terribly wrong.");
  	});
	};


	menu.ifEmptyList = function(){
      	if(menu.foundItems.length === 0){
      		return true;
      	}
      }

	menu.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
    };

		
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
	var service = this;
	var foundItems =[];
	

	service.getMatchedMenuItems = function (searchTerm) {
		foundItems =[];
    	return $http({
     		method: "GET",
      		url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json",})
    		.then(function (response) {
		
    	    	for (var key in response.data) {
    	    		for(var i=0; i<response.data[key].menu_items.length; i++){
    	    			var search = response.data[key].menu_items[i].name.toLowerCase();

      					if (search.includes(searchTerm.toLowerCase()) && searchTerm!== "") {
      						var item={
								name:response.data[key].menu_items[i].name,
								shortName:response.data[key].menu_items[i].short_name,
								description:response.data[key].menu_items[i].description
							};
      						foundItems.push(item); 
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

  	service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
  	};




}






})();