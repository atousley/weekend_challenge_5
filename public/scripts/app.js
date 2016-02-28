//API Key
//705cf21bd32eabe8c89315ec944817be
//API Secret
//74edd6bc528b55fc14f7f9f7e3c9d8d3
//API Status
//Active
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
        })
        .when('/animalPage', {
            templateUrl: '/views/templates/animalPage.html',
            controller: 'AnimalController'
        })
        .when('/favorites', {
            templateUrl: '/views/templates/favorites.html',
            controller: 'FavoritesController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);

