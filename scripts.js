// Create IIFE

(function(){

	// Create your main application module
	var app = angular.module("computer",["ngRoute"]);

	// Access config property on module, pass in 
	// the dynamic propety $routeProivder
	app.config(function($routeProvider){
		// Set up Routes
	});

}());