angular.module('app', []);

// SERVICE
angular.module('app').factory('UserService', function ($http) {

	// PRIVATE
	function addUser(username, password, email, groupId){
		$http({
			method: 'POST',
			url: 'http://172.16.25.35/angular-agenda-api/api/app/eRequest',
			data:{
				controller: 'Users',
				action: 'eAdd',
				params: {
					username: username,
					password: password,
					email: email,
					group_id: groupId
				}
			}
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
		addUser: addUser
	};
});

// CONTROLLER
angular.module('app').controller('AppCtrl', function($scope, UserService){
	$scope.signUp = function(){
		console.log('on sign up');
		UserService.addUser($scope.username, $scope.password, $scope.email, $scope.groupId)
	}
});