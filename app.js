var app = angular.module('sounder', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
	
	$routeProvider
	.when('/#/tracks', {
		templateUrl: 'tracks/tracks.html',
		controller: 'mainController'
	})
	.when('/#/users/:userId', {
		templateUrl: 'users/users.html',
		controller: 'mainController'
	})
	.otherwise({
		redirectTo: '/#/tracks'
	})
})