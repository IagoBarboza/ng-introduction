angular.module('app', []);

angular.module('app').controller('AppCtrl', function($scope){
	// ng-model
	$scope.username = "";

	// ng-click
	$scope.counter = 0;
	$scope.buttonClicked = function(){
		alert('clicked!');
		$scope.username = 'Iago';
		$scope.counter++;
	}

	// ng-change
	$scope.checkboxStatus = false;
	$scope.checkboxChanged = function(){
		console.log('checkbox changed!');
	}

	//scope watch
	$scope.fullName = 'no name';
	$scope.$watch('fullName', function(newValue, oldValue){
		console.log(newValue);
	});

	//ng-repeat
	$scope.people = ['Iago', 'Leandro', 'Durval', 'Daniel', 'Felipe', 'Iago'];
	// Não usar tipos primitivos para descrever um objeto
	$scope.peopleObjects = [
		{
			name: 'Iago',
			age: '22',
			occupation: 'student'
		},
		{
			name: 'Leandro',
			age: '32',
			occupation: 'Teacher'
		},
		{
			name: 'Durval',
			age: '24',
			occupation: 'student'
		},
		{
			name: 'Daniel',
			age: '22',
			occupation: 'student'
		},
		{
			name: 'Felipe',
			age: '20',
			occupation: 'student'
		}
	];

	//ng-show
	$scope.visibility = true;
	$scope.changeVisibility = function(){
		$scope.visibility = !$scope.visibility;
	}

});