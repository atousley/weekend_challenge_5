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
            templateUrl: '/views/templates/home.html'
        })
        .when('/horse', {
            templateUrl: '/views/templates/horse.html',
            controller: 'HorseController'
        })
        .when('/pig', {
            templateUrl: '/views/templates/pig.html',
            controller: 'PigController'
        })
        .when('/barnyard', {
            templateUrl: '/views/templates/barnyard.html',
            controller: 'BarnyardController'
        })
        .when('/bird', {
            templateUrl: '/views/templates/bird.html',
            controller: 'BirdController'
        })
        .when('/cat', {
            templateUrl: '/views/templates/cat.html',
            controller: 'CatController'
        })
        .when('/dog', {
            templateUrl: '/views/templates/dog.html',
            controller: 'DogController'
        })
        .when('/reptile', {
            templateUrl: '/views/templates/reptile.html',
            controller: 'ReptileController'
        })
        .when('/smallfurry', {
            templateUrl: '/views/templates/smallfurry.html',
            controller: 'SmallfurryController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);

