angular.module('app', [])
	.controller('AppCtrl', function($scope){
		
		$scope.camilo = {
			name: 'Camilo',
			address: 'Gruta de Lourdes'
		}

		$scope.iago = {
			name: 'Iago',
			address: 'Farol'
		}

		$scope.changeIagoAddress = function(){
			$scope.iago = {
				name: 'Iago',
				address: 'Pinheiro'
			}

			console.log($scope.iago);
		}
	})

	.directive('myCustomer', function(){
		return {
			templateUrl: 'template.html',
			restrict: 'E',
			scope:{
				// TWO WAY DATA-BINDING - DO NOT NEED {{}} ON HTML
				customer: '='
			}
		};
	});