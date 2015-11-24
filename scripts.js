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

	app.controller("ContactCtrl",["$scope", function($scope){
		console.log("In the contacts controller");
	}]);

	app.controller("ServicesCtrl",["$scope", function($scope){
		console.log("In the Services controller");
	}]);

}());