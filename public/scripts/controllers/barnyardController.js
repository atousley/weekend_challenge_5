myApp.controller('BarnyardController', ['$scope', '$http', function($scope, $http) {
    $scope.data = {};

    function petFinder() {
        // API key 705cf21bd32eabe8c89315ec944817be
        var key = '705cf21bd32eabe8c89315ec944817be';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=barnyard';
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                $scope.barnyard = response.data.petfinder.pet;
                console.log($scope.barnyard);
            }
        );
    }

    petFinder();
}]);