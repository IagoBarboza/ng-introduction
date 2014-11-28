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

		$scope.changeAddress = function(name){
	
			if(name == 'Camilo'){
				$scope.camilo = {
					name: 'Camilo',
					address: 'Endereço Alterado'
				}
			}

			if(name == 'Iago'){
				$scope.iago = {
					name: 'Iago',
					address: 'Endereço Alterado'
				}
			}
		}
	})

	.directive('myCustomer', function(){
		return {
			templateUrl: 'template.html',
			restrict: 'E',
			scope:{
				// TWO WAY DATA BINDING
				customer: "=",
				//FUNCTIONS BINDING
				changeAddress: "&"
			}
		};
	});