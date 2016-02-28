myApp.controller('HomeController', ['$scope', '$http', function($scope, $http) {
    $scope.data = {};

    $scope.getAnimal = function () {
        var animalType = $scope.animal;
        console.log(animalType);
        petFinder(animalType);
    };

    //console.log($scope.data);

        function petFinder(animal) {
            var key = '705cf21bd32eabe8c89315ec944817be';

            var baseURL = 'http://api.petfinder.com/';
            var query = 'pet.getRandom';
            query += '?key=' + key;
            query += '&animal=' + animal;
            //change animal to be dynamically coded for 1 pet finding controller.
            query += '&output=basic';
            query += '&format=json';

            var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
            console.log(request);

            $http.jsonp(request).then(
                function(response) {
                    $scope.animal = response.data.petfinder.pet;
                    console.log($scope.animal);
                }
            );
        }

        petFinder();
}]);

//        pick_animal: null,
//        animals: [
//            {id: '1', name: 'dog'},
//            {id: '2', name: 'cat'},
//            {id: '3', name: 'bird'}
//        ]
//    };
//
//}]);