angular.module('waterApp').controller('DailyController', function($http, $location, DailyService) {
  console.log('DailyController is loaded');

  var ctrl = this;

  var objToSend = {
    date: new Date(),
    volume: 2
  };

  ctrl.intakeList = [];
  var parsedData = null;

  ctrl.getIntake = function() {
    DailyService.getIntake().then(function(response) {
      console.log('Logging response inside getIntake', response);

      ctrl.intakeList = response.data;
      console.log('intake list ', ctrl.intakeList);
    });
  };//end getIntake

  ctrl.getIntake();



  ctrl.particle = function() {
    var deviceID = "2f0033000547343339373536",
    accessToken = "e91ff47d87b3de73e3bae77bb9c6d6d8ab1504dd",
    eventSource = new EventSource("https://api.particle.io/v1/devices/" + deviceID + "/events/?access_token=" + accessToken)

    eventSource.addEventListener('button released', function(e) {
       parsedData = JSON.parse(e.data);
      console.log('Logging parsed data', parsedData);
    });

    ctrl.saveData = function(data) {
        $http.post('/addIntake', objToSend).then(function(response) {
          console.log(response);
          console.log('saved data posting', data);
        });
    };

    // ctrl.saveData(objToSend);
  };//end particle

  ctrl.particle();

});//end controller
