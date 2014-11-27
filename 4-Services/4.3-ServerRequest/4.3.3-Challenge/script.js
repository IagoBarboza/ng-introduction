angular.module('app', []);

// SERVICE
angular.module('app').factory('ContactService', function ($http) {

	//PRIVATE
	var contactsList = [];

	//UPDATING CONTACTS LIST
	function updateContactsList(callback){
		$http({
			method: 'POST',
			url: 'http://172.16.25.35/angular-agenda-api/api/app/eRequest',
			data:{
				controller: 'Contacts',
				action: 'eGetList',
				params: {}
			}
		})
		.success(function(response){
			contactsList = response;
			callback();
		})
		.error(function(response){
			console.log(response);
		});
	}

	// RETURNS CONTACTS LIST
	function getContactsList(){
		return contactsList;
	}

	// ADDS A CONTACT ON THE API
	function addContact(name, number, address, callback){
		$http({
			method: 'POST',
			url: 'http://172.16.25.35/angular-agenda-api/api/app/eRequest',
			data:{
				controller: 'Contacts',
				action: 'eAdd',
				params: {
					name: name,
					number: number,
					address: address
				}
			}
		})
		.success(function(response){
			if(response == 'success'){
				alert('New Contact Added!');
				callback();
			}
		})
		.error(function(response){
			console.log(response);
		});
	}

	// REMOVE A CONTACT ON THE API
	function removeContact(id, callback){
		$http({
			method: 'POST',
			url: 'http://172.16.25.35/angular-agenda-api/api/app/eRequest',
			data:{
				controller: 'Contacts',
				action: 'eRemove',
				params: {
					id: id
				}
			}
		})
		.success(function(response){
			if(response == 'success'){
				alert('Contact Removed!');
				callback();
			}
			console.log(response);
		})
		.error(function(response){
			console.log(response);
		});	
	}

	// PUBLIC
	return {
		updateContactsList: updateContactsList,
		getContactsList: getContactsList,
		addContact: addContact,
		removeContact: removeContact
	};
});

// CONTROLLER
angular.module('app').controller('AppCtrl', function($scope, ContactService){
	
	// ORDER BY
	$scope.predicate = 'Contact.name';

	// UPDATING SERVICE AND SCOPE CONTACT LIST
	ContactService.updateContactsList(function updateScopeContacts(){
		$scope.contactsList = ContactService.getContactsList();
	});

	// ADD CONTACT
	$scope.addContact = function(){
		// Adding a contact
		ContactService.addContact($scope.name, $scope.number, $scope.address, function(){
			// Updating the service contacts list
			ContactService.updateContactsList(function(){
				// Updating the scope service contacts list
				$scope.contactsList = ContactService.getContactsList();
			});
		});
	}

	// REMOVE CONTACT
	$scope.removeContact = function(id){
		console.log('Removing Contact!');
		// Removing a contavt
		ContactService.removeContact(id, function(){
			// Updating the service contacts list
			ContactService.updateContactsList(function(){
				// Updating the scope service contacts list
				$scope.contactsList = ContactService.getContactsList();
			});
		});
	}
});