"USE STRICT";
myVariableApp.controller("indexCtrl", function($scope, $location ){
	
    $scope.initMap = function() {
      var company = {lat: -23.284867, lng: -45.965741};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: company
      });

      var marker = new google.maps.Marker({
        position: company,
        map: map
      });
    }; 

	$scope.initMap();

});
