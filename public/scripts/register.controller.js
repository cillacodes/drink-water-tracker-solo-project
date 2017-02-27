angular.module('waterApp').controller('RegisterController', function($http, $location){
  var ctrl = this;

  ctrl.register = function() {
    console.log('creating a new user');

    $http.post('/register', {
      username: ctrl.username,
      password: ctrl.password
    }).then(function(response){
      console.log(response);
      swal("Sweet!", "You are now registered for Drink!", "success");
      $location.path('/home');
    }, function(error) {
      console.log('error registering new user', error);
      swal("Oops!", "Error registering!", "error");
    });
  };
});
