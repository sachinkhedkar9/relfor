relfor.controller('homepageController', ['$scope', '$http', function($scope, $http){
    $scope.corousel = [];
    console.log('hi i m here');

    $http.get('data/corousel.js').then(function (response){
        $scope.corousel = response.data;        
    });

    
}]);