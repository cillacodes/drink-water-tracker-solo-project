//routing
angular
  .module("waterApp", ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when("/home", {
        templateUrl: "views/home.html",
        controller: "HomeController as home",
        authRequired: true
      })
      .when("/newUser", {
        templateUrl: "views/register.html",
        controller: "RegisterController as register"
      })
      .when('/dailyLog', {
       templateUrl: 'views/dailyLog.html',
       controller: "DailyController as daily"
      })
      .when('/settings', {
       templateUrl: 'views/settings.html'
     }).when('/intake', {
        controller: "HomeController as home"
      }).otherwise({
        templateUrl: "views/login.html",
        controller: "LoginController as login"
      });
  })
  .run(function($rootScope, $location, $route, AuthService) {
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
      AuthService.checkLoginStatus().then(function(loggedIn) {
        console.log(loggedIn);
        if (next.authRequired && !loggedIn) {
          $location.path("/login");
          $route.reload();
        }
      });
    });
  });





// var app = angular.module('passportApp', ['ngRoute']);
// console.log('Water tracker is ready');
//
// app.config(function($routeProvider, $locationProvider) {
//   $routeProvider.when('/home', {
//     templateUrl: 'views/home.html',
//     controller: 'HomeController as home',
//     authRequired: true
//   }).when('/newUser', {
//     templateUrl: 'views/register.html',
//     controller: 'RegisterController as register'
//   }).when('/daily-log', {
//     templateUrl: 'views/daily-log.html'
//   }).when('/profile', {
//     templateUrl: 'views/profile.html'
//   }).otherwise({
//     templateUrl: 'views/login.html',
//     controller: 'LoginController as login'
//   });
//   $locationProvider.html5Mode(true);
// }); //end app.config
//
// app.controller('DefaultController', function() {
//   console.log('DefaultController is loaded');
// }); //end app.controller
//
// app.run(function($rootScope, $location, $route, AuthService) {
//   $rootScope.$on("$routeChangeStart", function(event, next, current) {
//     AuthService.checkLoginStatus().then(function(loggedIn) {
//       console.log(loggedIn);
//       if (next.authRequired && !loggedIn) {
//         $location.path("/login");
//         $route.reload();
//       }
//     });
//   });
// });
