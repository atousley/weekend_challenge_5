myApp.controller('FavoritesController', ['$scope', 'DataFactory','$http', function($scope, DataFactory, $http) {
    $scope.dataFactory = DataFactory;
    $scope.count = 0;

    if($scope.dataFactory.favoriteList() === undefined) {
        $scope.dataFactory.retrieveFavorites().then(function() {
            $scope.favorites = $scope.dataFactory.favoriteList();
        });
    } else {
        $scope.favorites = $scope.dataFactory.favoriteList();
    }

    $scope.getCount = function () {
        $scope.count = $scope.dataFactory.faveCount();
    }

}]);