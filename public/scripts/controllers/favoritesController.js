myApp.controller('FavoritesController', ['$scope', 'DataFactory','$http', function($scope, DataFactory, $http) {
    $scope.charLimit = 100;
    $scope.dataFactory = DataFactory;

    $scope.dataFactory.retrieveFavorites().then(function() {
        $scope.favorites = $scope.dataFactory.favoriteList();
    });

}]);