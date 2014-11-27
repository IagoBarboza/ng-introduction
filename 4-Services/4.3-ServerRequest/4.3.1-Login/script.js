angular.module('app', []);

// SERVICE
angular.module('app').factory('UserService', function ($http) {

	// PRIVATE
	function login(username, password){
		$http({
			method: 'POST',
			url: 'http://172.16.25.35/angular-agenda-api/api/users/eLogin',
			data: {
				username: username,
				password: password
			}
		})
		.success(function(response){
			console.log(response);
		})
		.error(function(response){
			console.log(response);
		});
	}

	function logout(){
		$http({
			method: 'POST',
			url: 'http://172.16.25.35/angular-agenda-api/api/users/eLogout'
		})
		.success(function(response){
			console.log(response);
		})
		.error(function(response){
			console.log(response);
		});		
	}

	// PUBLIC
	return {
		login: login,
		logout: logout
	};
});

// CONTROLLER
angular.module('app').controller('AppCtrl', function($scope, UserService){
	
	$scope.login = function(){
		UserService.login($scope.username, $scope.password);
	}

	$scope.logout = function(){
		UserService.logout();
	}
});