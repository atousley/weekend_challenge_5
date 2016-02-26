myApp.controller('HorseController', ['$scope', '$http', function($scope, $http) {
    $scope.data = {};

    function petFinder() {
        // API key 705cf21bd32eabe8c89315ec944817be
        var key = '705cf21bd32eabe8c89315ec944817be';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=horse';
        query += '&size=XL';
        query += '&location=55413';
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                $scope.horse = response.data.petfinder.pet;
                console.log($scope.horse);
            }
        );
    }

    petFinder();
}]);