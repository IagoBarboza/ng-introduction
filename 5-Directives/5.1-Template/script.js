angular.module('app', [])
	.controller('AppCtrl', function($scope){
		$scope.customer = {
			name: 'Camilo',
			address: 'Gruta de Lourdes'
		}
	})

	.directive('myCustomer', function(){
		return {
			template: 'Name: {{customer.name}} Address: {{customer.address}}'
		};
	});