angular.module('app', []);

angular.module('app').controller('AppCtrl', function($scope){
	$scope.predicate = 'name';

	$scope.contactsList = [
		{
			name: "Iago Barboza",
			number: "91261296",
			address: "Rua Joaquim Gouveia de Albuquerque"
		},
		{
			name: "Leadro Sales",
			number: "99988730",
			address: "Rua da felícia"
		},
		{
			name: "Felipe Gualberto",
			number: "92331231",
			address: "Rua da paz"
		},
		{
			name: "Arthur",
			number: "33221321",
			address: "Ponta Verde"
		},
		{
			name: "Durval",
			number: "99921233",
			address: "Tabuleiro dos Martins"
		}
	];

	$scope.addContact = function(){
		$scope.contactsList.push({
			name: $scope.name,
			number: $scope.number,
			address: $scope.address
		});

		alert('New Contact Added!');

		$scope.name = "";
		$scope.number = "";
		$scope.address = "";
	}

	$scope.removeContact = function(name){
		var i = 0;
		for(i=0; i<$scope.contactsList.length;i++){
			if($scope.contactsList[i].name == name){
				$scope.contactsList.splice(i,1);
			}
		}
	}
});