myApp.factory('DataFactory', ['$http', function($http) {

    var favorites = undefined;

    var postFavorite = function(data) {
        $http.post('/data', data).then(function(response) {
        });
    };

    var getFavorites = function() {
        var promise = $http.get('/data').then(function(response) {
            favorites = response.data;
        });
        return promise;
    };

    var publicApi = {
        favoriteList: function() {
            return favorites;
        },
        retrieveFavorites: function() {
            return getFavorites();
        },
        addFavorite: function(animal, breed, photo, name, age, sex, description, city, state) {
            var favorite = {};
            favorite.animal = animal;
            favorite.breed = breed;
            favorite.photo = photo;
            favorite.name = name;
            favorite.age = age;
            favorite.sex = sex;
            favorite.description = description;
            favorite.city = city;
            favorite.state = state;

            postFavorite(favorite);
        }

    };
    return publicApi;

}]);