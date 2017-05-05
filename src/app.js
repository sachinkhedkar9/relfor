var relfor = angular.module("relfor",['ngRoute']);

relfor.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when("/login/",{
    redirectTo: '/login/',
    templateUrl: 'views/essential/login.html',
    controller: 'loginController'
  }).  
  otherwise({
    redirectTo: '/',
    templateUrl: 'views/homepage.html'    
  });
}]);