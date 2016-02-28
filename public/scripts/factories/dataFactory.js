myApp.factory('DataFactory', ['$http', function($http) {

    var favorites = undefined;

    var postFavorite = function(data) {
        //console.log(data);
        $http.post('/data', data).then(function(response) {
            console.log('posting', response);
        });
    };

    var getFavorites = function() {
        console.log('get function firing')
        var promise = $http.get('/data').then(function(response) {
            favorites = response.data;
            console.log('response: ', favorites);
        });
        return promise;
    };

    var publicApi = {
        favoriteList: function() {
            return favorites;
        },
        retrieveFavorites: function() {
            getFavorites();
        },
        addFavorite: function(name) {
            var favorite = {};
            favorite.name = name;
            console.log(favorite);
            postFavorite(favorite);
        }
    };
    return publicApi;

}]);