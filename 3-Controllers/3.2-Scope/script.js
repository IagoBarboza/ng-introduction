angular.module('app', []);

angular.module('app').controller('AppCtrl', function($scope){
	$scope.teacher = 'Leandro';
	$scope.student = 'Durval';
	$scope.people = ['Leandro', 'Durval', 'Iago', 'Felipe'];
})