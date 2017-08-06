
  var app = angular.module( 'app', [] )
.controller('phonebookCtrl', function( $scope ){

	

  $scope.currentPersonId = -1;
  $scope.phonebook = [
    { name: 'Cali Roll', phone: '+380-668-622-488', email: 'calli@roll.ua'},
	{ name: 'Philly bron', phone: '+123-456-789-123', email: 'philli@bron.ia'},
	{ name: 'Tiger forse', phone: '+365-125-888-589', email: 'tigery@forse.com'},
	{ name: 'Rainbow darc', phone: '+985-052-5895-489', email: 'rainbow@dark.ea'},
	{ name: 'Shvarc arnold', phone: '+888-777-888-444', email: 'shvarc@arnold.us'},
	{ name: 'brus wilis', phone: '+896-568-872-173', email: 'brus@willis.ua'},
	{ name: 'Chac noris', phone: '+258-238-796-110', email: 'chac@noris.ia'},
	{ name: 'sivester stalones', phone: '+347-46-206-186', email: 'sivestr@stalones.com'},
	{ name: 'Ozzy ozbourn', phone: '+314-75-710-189', email: 'Ozzy@ozbourn.ua'},
	{ name: 'Jackie chan', phone: '+856-987-878-432', email: 'Jackie@chan.us'},


  ];

   $scope.sortType     = undefined; // значение сортировки по умолчанию
    $scope.sortReverse  = false;  // обратная сортривка
     $scope.searchName   = ''; 

  $scope.addNewPerson = function() {
    if ( $scope.name != '' ) {
      $scope.phonebook.push({
        name: $scope.name,
        phone: $scope.phone,
        email: $scope.email
      });
      $scope.name = '';
      $scope.phone = '';
      $scope.email = '';
    }
  }
  $scope.savePerson = function() {
    if( $scope.currentPersonId > -1 ){
      var id = $scope.currentPersonId;
      $scope.phonebook[id].name = $scope.name;
      $scope.phonebook[id].phone = $scope.phone;
      $scope.phonebook[id].email = $scope.email;
      $scope.name = '';
      $scope.phone = '';
      $scope.email = '';
      $scope.currentPersonId = -1;
    }
  }
  $scope.editPerson = function ( id ) {
    $scope.currentPersonId = id;
    $scope.name = $scope.phonebook[id].name;
    $scope.phone = $scope.phonebook[id].phone;
    $scope.email = $scope.phonebook[id].email;
  }
  $scope.deletePerson = function( id ) {
    $scope.phonebook.splice( id, 1 );
  }


$scope.delete = function(person) { 
    var index = $scope.person.indexOf(person); 
    $scope.person.splice(index, 1); 
};
             
})