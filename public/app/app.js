var app = angular.module('textSupport', ['ngRoute' ,'firebase']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'app/home/homeView.html'
    })
    .when('/support', {
      templateUrl: 'app/support/supportView.html',
      controller: 'supportController',
      controllerAs: 'support'
    })
    .otherwise({
      redirectTo: '/support'
    })
})