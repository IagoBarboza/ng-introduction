angular.module('app', [])
	.controller('AppCtrlOne', function($scope){
		$scope.customer = {
			name: 'Camilo',
			address: 'Gruta de Lourdes'
		}
	})

	.controller('AppCtrlTwo', function($scope){
		$scope.customer = {
			name: 'Iago',
			address: 'Farol'
		}	
	})


	.directive('myCustomer', function(){
		return {
			templateUrl: 'template.html',
			// templateUrl: function(){
			// 	return 'template.html';
			// }
			restrict: 'E'
		};
	});