myApp.factory('DataFactory', ['$http', function($http) {

    var postFavorite = function(data) {
        //console.log(data);
        $http.post('/data', data).then(function(response) {
            console.log('posting');
        });
    };


    var publicApi = {
        addFavorite: function(name) {
            var favorite = {};
            favorite.name = name;
            console.log(favorite)
            postFavorite(favorite);
        }
    };
    return publicApi;

}]);

//// PRIVATE
//var people = undefined;
//
//var getData = function() {
//    console.log('getting data from server');
//    var promise = $http.get('/data').then(function(response) {
//        people = response.data;
//        console.log('Async data response:', people);
//    });
//
//    return promise;
//};
//
//var addPerson = function(name) {
//    people.push(name);
//};
//
//
////PUBLIC
//var publicApi = {
//    peopleData: function() {
//        return people;
//    },
//    retrieveData: function() {
//        return getData();
//    },
//    addName: function(name) {
//        addPerson(name);
//    }
//};
//
//return publicApi;