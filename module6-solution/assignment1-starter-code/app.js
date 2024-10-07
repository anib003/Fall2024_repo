(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
	$scope.textColor = 'black';
	$scope.lunchMenu = "";
	$scope.text = "";
	$scope.CheckItems = function(){
		var lunchArray = $scope.lunchMenu.split(',');
		var count =0;

		if(lunchArray == [] && lunchMenu){
			lunchArray[0] = lunchMenu;
		}
		else{
			$scope.text="Please enter data first!";
			$scope.textColor = 'red';
			
		}

		 for (var i = 0; i < lunchArray.length; i++) {
		 	console.log(lunchArray[i]);
		 	if(lunchArray[i]){ //empty item in the array is not counted
		 		count++;

		 	}
		 }
		 console.log("Count:" + count);

		 if(count >=1 && count <=3){
		 	$scope.text="Enjoy!";
		 	$scope.textColor = 'green';
		 }
		 else if(count >3){
		 	$scope.text="Too much!";
		 	$scope.textColor = 'green';
		 }
		 return count;
	}

}


})();