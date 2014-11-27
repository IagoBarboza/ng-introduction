angular.module('app', []);

angular.module('app').factory('AppService', function () {
	
	// PRIVATE
	var variableOne = 'valueOne';
	var variavleTwo = 'valueTwo';

	function functionOne(){
		return variableOne;
	}

	function functionTwo(){
		return variableTwo;
	}

	// PUBLIC
	return{	
		functionOne: functionOne,
		functionTwo: functionTwo
	};
});

angular.module('app').controller('AppCtrl', function($scope, AppService){
	console.log(AppService.functionOne());
});

