angular.module('app', [])
	.controller('AppCtrl', function($scope){
		$scope.customer = {
			name: 'Camilo',
			address: 'Gruta de Lourdes'
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