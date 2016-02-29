myApp.controller('FavoritesController', ['$scope', 'DataFactory','$http', function($scope, DataFactory, $http) {
    $scope.charLimit = 100;
    $scope.dataFactory = DataFactory;

    //take out if else to fire directly when favorite is clicked
    if($scope.dataFactory.favoriteList() === undefined) {
        $scope.dataFactory.retrieveFavorites().then(function() {
            $scope.favorites = $scope.dataFactory.favoriteList();
        });
    } else {
        $scope.favorites = $scope.dataFactory.favoriteList();
    }

}]);