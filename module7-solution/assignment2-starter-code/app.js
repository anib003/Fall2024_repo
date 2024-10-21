(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService', '$scope'];
function ToBuyController(ShoppingListCheckOffService, $scope){
	var ToBuy = this;

	ToBuy.items = ShoppingListCheckOffService.getItems();

	ToBuy.removeItem = function(itemIndex){
		ShoppingListCheckOffService.removeItem(itemIndex);
		$scope.message1= ShoppingListCheckOffService.getEmptyMessage1();
	}




	
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', '$scope'];
function AlreadyBoughtController(ShoppingListCheckOffService, $scope){
	var AlreadyBought = this;

	AlreadyBought.bought = ShoppingListCheckOffService.getBoughtItems();
	$scope.message2= ShoppingListCheckOffService.getEmptyMessage2();


	
	
}


function ShoppingListCheckOffService(){
	var service = this;

	var items = [{
		itemName: "cookies",
		quantity: 10,
		pricePerItem : 2
		},
		{
		itemName: "cupcakes",
		quantity: 15,
		pricePerItem:5
		},
		{
		itemName: "pizza",
		quantity: 10,
		pricePerItem: 7
		},
		{
		itemName: "drinks",
		quantity: 20,
		pricePerItem: 1
		},
		{
		itemName: "burgers",
		quantity: 15,
		pricePerItem:8
		}];

	var bought =[];
	var message1 ="";
	var message2 ="";

	service.getBoughtItems = function(){
		return bought;
	};

	service.getItems = function(){
		return items;
	};

	service.removeItem = function (itemIndex) {

	var item = {
      itemName: items[itemIndex].itemName,
      quantity: items[itemIndex].quantity,
      pricePerItem: items[itemIndex].pricePerItem
    };
    bought.push(item);
    console.log("Bought:" , bought);

    items.splice(itemIndex, 1);
    console.log("Items:" , items);

  	};

  	

  	service.getEmptyMessage1 = function(){
  		service.message1 = "";
  		if(items.length === 0){
  			service.message1= "Everything is bought!";
  			console.log(service.message1);
  		}		
  		else{
  			service.message1= " ";
  			console.log(service.message1);
  		}
  		return service.message1;
  	}


  	service.getEmptyMessage2 = function(){
  		service.message2 = "Nothing bought yet!";
  		if(bought.length > 0){
  			service.message2 = "";
  			console.log(service.message2);
  		}
  		// else{
  		// 	service.message2= " ";
  		// 	console.log(service.message2);
  		// }
  		return service.message2;
  	}

 
}

})();