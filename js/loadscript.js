 var app = angular.module( 'app', [] )
.controller('phonebookCtrl', function( $scope ){

  

	

  $scope.currentPersonId = -1;
  $scope.phonebook = [
    { name: 'Cali Roll', phone: '+380-668-622-488', email: 'calli@roll.ua', category:"Леди", date:"2011/01/11"},
	{ name: 'Philly bron', phone: '+123-456-789-123', email: 'philli@bron.ia', category:"Коллега", date:"1963/11/15"},
	{ name: 'Tiger forse', phone: '+365-125-888-589', email: 'tigery@forse.com', category:"Леди", date:"1986/12/03"},
	{ name: 'Rainbow darc', phone: '+985-052-5895-489', email: 'rainbow@dark.ea', category:"Брат", date:"1945/10/02"},
	{ name: 'Shvarc arnold', phone: '+888-777-888-444', email: 'shvarc@arnold.us', category:"Кум", date:"1951/09/29"},
	{ name: 'brus wilis', phone: '+896-568-872-173', email: 'brus@willis.ua', category:"Друг", date:"1962/08/18"},
	{ name: 'Chac noris', phone: '+258-238-796-110', email: 'chac@noris.ia', category:"Друг", date:"1955/06/09"},
	{ name: 'sivester stalones', phone: '+347-46-206-186', email: 'sivestr@stalones.com', category:"Кум", date:"1956/07/08"},
	{ name: 'Ozzy ozbourn', phone: '+314-75-710-189', email: 'Ozzy@ozbourn.ua', category:"Коллега", date:"1947/05/12"},
	{ name: 'Jackie chan', phone: '+856-987-878-432', email: 'Jackie@chan.us', category:"Брат", date:"1963/04/31"},


  ];

   $scope.sortType     = undefined; // значение сортировки по умолчанию
    $scope.sortReverse  = false;  // обратная сортривка
     $scope.searchName   = ''; 


     $scope.showCum = function () {
               $scope.findName='Кум'
              
    };
	
	$scope.showAll = function () {
        $scope.findName="";
    };
	
	$scope.showBrother = function () {
        $scope.findName="Брат";
    };
	$scope.showColegue = function () {
        $scope.findName="Коллега";
    };
	
	$scope.showFriend = function () {
        $scope.findName="Друг";
    };
	
	$scope.showLedies = function () {
        $scope.findName="Леди";
    };

  $scope.addNewPerson = function() {
    if ( $scope.name != '' ) {
      $scope.phonebook.push({
        name: $scope.name,
        phone: $scope.phone,
        email: $scope.email,
        category:$scope.category,
        date:$scope.date,
      });
      $scope.name = '';
      $scope.phone = '';
     $scope.email = '';
      $scope.category='';
      $scope.date='';
    }
  }
  $scope.savePerson = function() {
    if( $scope.currentPersonId > -1 ){
      var id = $scope.currentPersonId;
      $scope.phonebook[id].name = $scope.name;
      $scope.phonebook[id].phone = $scope.phone;
      $scope.phonebook[id].email = $scope.email;
      $scope.phonebook[id].category = $scope.category;
      $scope.phonebook[id].date = $scope.date;


      $scope.name = '';
      $scope.phone = '';
      $scope.email = '';
      $scope.category = '';
      $scope.date = '';
      $scope.currentPersonId = -1;
    }
  }
  $scope.editPerson = function ( id ) {
    $scope.currentPersonId = id;
    $scope.name = $scope.phonebook[id].name;
    $scope.phone = $scope.phonebook[id].phone;
    $scope.email = $scope.phonebook[id].email;
    $scope.category = $scope.phonebook[id].category;
    $scope.date = $scope.phonebook[id].date;
  }
  $scope.deletePerson = function( id ) {
    $scope.phonebook.splice( id, 1 );
  }


$scope.delete = function(person) { 
    var index = $scope.person.indexOf(person); 
    $scope.person.splice(index, 1); 
};

$scope.takeDay = function (day) {
        var strDay = new Date(day);
        return strDay;
    };
             
})
