angular.module('waterApp').controller('HomeController', function($scope, $http, $location){
  this.addIntake = function(volume) {

      //when user clicks "add" button, add to databaseå
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

    // var objToSend = $scope.ozIn;
    //
    //  $http({
    //   method: 'POST',
    //   url: 'addIntake',
    //   data: {
    //     volume: objToSend
    //   }
    // }).then(function(response) {
    //   console.log('Success adding intake', response);
    // }).catch(function(err) {
    //   console.log('Error adding intake');
    // });

  };


  this.logout = function() {
    $http.delete('/login').then(function(){
      console.log('Successfully logged out!');
      $location.path('/');
    }).catch(function(err){
      console.log('Error logging out');
    });
  }


}); //end app.module
