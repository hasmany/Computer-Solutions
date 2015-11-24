// Create IIFE

(function(){

	// Create your main application module
	var app = angular.module("computer",["ngRoute"]);

	// Access config property on module, pass in 
	// the dynamic propety $routeProivder

	app.config(["$routeProvider", function($routeProvider){
		// Set up Routes
		$routeProvider
			.when("/",{
				templateUrl: "/main.html",
				controller: "MainCtrl"
			});
	}]);

	app.controller("MainCtrl",[function($scope){
		// What hhapens when this controller is called
		console.log("This is the main controller test");
	}]);

}());