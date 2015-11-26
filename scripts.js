// Create IIFE

(function(){

	// Create your main application module
	var app = angular.module("computer",["ngRoute"]);

	// Access config property on module, pass in 
	// the dynamic propety $routeProivder

	app.config(["$routeProvider", function($routeProvider){
		// Set up Routes
		$routeProvider
			.when("/main",{
				templateUrl: "/main.html",
				controller: "MainCtrl"
			})
			.when("/about",{
				templateUrl: "/about.html",
				controller: "MainCtrl"
			})
			.when("/contact",{
				templateUrl: "/contact.html",
				controller: "ContactCtrl"
			})
			.when("/service",{
				templateUrl: "/service.html",
				controller: "ServicesCtrl"
			});
	}]);

	app.controller("MainCtrl",["$scope",function($scope){
		// What hhapens when this controller is called
		$scope.person = "John Doe"
		console.log("In the Main Controller");
	}]);

	app.controller("ContactCtrl",["$scope", "$http", function($scope, $http){
		console.log("In the contacts controller");

		// Get request to locations .json
		$http({
			method: "GET",
			url: "locations.json"
		}).then( function sucessCallBack(response){
			$scope.locations = [];

			for (var i = 0, iLen = response.data.length; i < iLen; i++) {
				$scope.locations.push({
					name: response.data[i].name,
					street_address : response.data[i].street_address,
					city: response.data[i].city,
					state: response.data[i].state,
					zip: response.data[i].zip,
					phone: response.data[i].phone
				});
			}

			console.log($scope.locations);

		}, function errorCallBack(response){
			console.log("Error!" + response.status);
		})
	}]);

	app.controller("ServicesCtrl",["$scope","$http", function($scope, $http){
		

		$http({
			method: "GET",
			url: "services.json"
		}).then(function successCallBack(response){
			// This call back will be called asynchronoulsy
			// when the response is available
			// You want to loop through your response
			$scope.services = [];
			console.log("In your Services Controller");
			// Loop through your responses
			// and push data as an object into services array
			for (var i = 0, iLen = response.data.length; i < iLen; i++) {
				$scope.services.push({
					name: response.data[i].name,
					description: response.data[i].description,
					image: response.data[i].image
				});
			}
		
		
			console.log($scope.services);
		}, function errorCallBack(response){
			// called asynchronously if an error occurs
			// or server returns response with an error status
			console.log("error");
		});
		console.log($http);
		// console.log("In the Services controller");
	}]);

}());

