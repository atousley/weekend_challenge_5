myApp.factory('DataFactory', ['$http', function($http) {

    var favorites = undefined;
    var count = 0;

    var postFavorite = function(data) {
        //console.log(data);
        $http.post('/data', data).then(function(response) {
            console.log('posting', response);
        });
    };

    var getFavorites = function() {
        console.log('get function firing');
        var promise = $http.get('/data').then(function(response) {
            favorites = response.data;
            console.log('response: ', favorites);
        });
        return promise;
    };

    var countFavorites = function() {
        console.log('count faves get function firing');
        var promise = $http.get('/count').then(function(response) {
            count = response.data;
            console.log('count response: ', favorites);
        });
        return promise;
    }

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

            //console.log(favorite);
            postFavorite(favorite);
        },
        faveCount: function() {
            return countFavorites();
        }

    };
    return publicApi;

}]);