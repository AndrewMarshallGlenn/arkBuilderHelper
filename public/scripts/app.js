var myApp = angular.module('arkBuildHelper', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {

  $routeProvider

    .when('/items', {
      templateUrl: '/views/templates/items.html',
      controller: 'ItemController',
    })
    .otherwise({
      redirectTo: 'items',
    });

}]);
