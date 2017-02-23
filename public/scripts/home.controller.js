angular.module('waterApp').controller('HomeController', function($scope, $http, $location){

  this.addIntake = function(volume) {
    //when user clicks "add" button, add to database
    console.log('in add intake!', $scope.ozIn );

    // put user input into an object
    var objToSend = {
      date: new Date(),
      volume: $scope.ozIn
    };

    // send object to database
    return $http.post('/addIntake', objToSend ).then(function(response) {
      console.log('Success adding intake', response);
    }).catch(function(err) {
      console.log('Error displaying intake');
    });
};
 //api.particle.io/v1/devices/
  // this.particle = function() {
  //   var deviceID = "2f0033000547343339373536",
  //    accessToken = "e91ff47d87b3de73e3bae77bb9c6d6d8ab1504dd",
  //    eventSource = new EventSource("https:" + deviceID + "/events/?access_token=" + accessToken)
  // };//end particle
  //
  // particle();

  this.logout = function() {
    $http.delete('/login').then(function(){
      console.log('Successfully logged out!');
      $location.path('/');
    }).catch(function(err){
      console.log('Error logging out');
    });
  }


}); //end app.module
