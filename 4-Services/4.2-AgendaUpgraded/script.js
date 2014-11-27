angular.module('app', []);

// SERVICE
angular.module('app').factory('ContactService', function () {

	//PRIVATE
	var contactsList = [
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

	function getContactsList(){
		return contactsList;
	}

	function addContact(newName, newNumber, newAddress){
		contactsList.push({
			name: newName,
			number: newNumber,
			address: newAddress
		});
		return true;
	}

	function removeContact(name){
		var i = 0;
		
		for(i=0; i<contactsList.length;i++){
			if(contactsList[i].name == name){
				contactsList.splice(i,1);
			}
		}
	}

	// PUBLIC
	return {
		getContactsList: getContactsList,
		addContact: addContact,
		removeContact: removeContact
	};
});

// CONTROLLER
angular.module('app').controller('AppCtrl', function($scope, ContactService){
	
	// Contacts List From service
	$scope.contactsList = ContactService.getContactsList(); 

	// OrderBy 
	$scope.predicate = 'name';
	
	$scope.addContact = function(){
		var result = ContactService.addContact($scope.name, $scope.number, $scope.address);
		
		if(result) alert('New Contact Added!');

		$scope.name = "";
		$scope.number = "";
		$scope.address = "";
	}

	$scope.removeContact = function(name){
		ContactService.removeContact(name);
	}
});