angular.module('app', ['ig.contact', 'ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'app-modules/contact/contacts.html',
			controller: 'ContactsCtrl'
		})
		.otherwise({ redirectTo: '/' })
	});