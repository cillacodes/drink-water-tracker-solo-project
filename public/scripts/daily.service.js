angular.module('waterApp').service('DailyService', function($http, $location) {
  console.log('dailyservice running');

  this.getIntake = function() {
    // return $http.get('/person', person).catch(function(err) {
    return $http.get('/daily').catch(function(err) {
      console.log('Error getting intake');
    });
  };

}); //end module
