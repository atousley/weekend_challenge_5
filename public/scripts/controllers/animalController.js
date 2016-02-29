myApp.controller('AnimalController', ['$scope', 'DataFactory','$http', function($scope, DataFactory, $http) {
    $scope.showThis = false;

    $scope.dataFactory = DataFactory;

    $scope.animals = [
        {id: 'dog', name: 'Dogs'},
        {id: 'cat', name: 'Cats'},
        {id: 'smallfurry', name: "Small 'n Furry"},
        {id: 'reptile', name: 'Reptiles'},
        {id: 'bird', name: 'Birds'},
        {id: 'horse', name: 'Horses'},
        {id: 'pig', name: 'Pigs'},
        {id: 'barnyard', name: 'Other Farm Animals'}
    ];

    $scope.getAnimal = function () {
        var animalType = $scope.animal_list.id;
        $scope.showThis = true;
        $scope.message = '';
        petFinder(animalType);
    };

        function petFinder(animal) {
            var key = '705cf21bd32eabe8c89315ec944817be';

            var baseURL = 'http://api.petfinder.com/';
            var query = 'pet.getRandom';
            query += '?key=' + key;
            query += '&animal=' + animal;
            query += '&output=basic';
            query += '&format=json';

            var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
            console.log(request);

            $http.jsonp(request).then(
                function(response) {
                    $scope.animal = response.data.petfinder.pet;
                }
            );
        }

        petFinder();

    $scope.favorite = function() {
        var animal = $scope.animal.animal.$t;
        var breed = $scope.animal.breeds.breed.$t;
        var age = $scope.animal.age.$t;
        var sex = $scope.animal.sex.$t;
        var photo = $scope.animal.media.photos.photo[2].$t;
        var description = $scope.animal.description.$t;
        var city = $scope.animal.contact.city.$t;
        var state = $scope.animal.contact.state.$t;
        var name = $scope.animal.name.$t;

        $scope.dataFactory.addFavorite(animal, breed, photo, name, age, sex, description, city, state);

        $scope.message = ('Added to Favorites!');
    }
}]);