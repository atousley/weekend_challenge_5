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

