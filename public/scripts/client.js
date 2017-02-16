var app = angular.module('waterApp', ['ngRoute']);
console.log('Water tracker is ready');

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html'
  }).when('/daily-log', {
    templateUrl: 'views/daily-log.html'
  }).when('/profile', {
    templateUrl: 'views/profile.html'
  }); 
  $locationProvider.html5Mode(true);
}); //end app.config

app.controller('DefaultController', function() {
  console.log('DefaultController is loaded');
}); //end app.controller
