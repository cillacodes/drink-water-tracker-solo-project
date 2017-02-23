angular.module('waterApp').controller('TotalController', function($http, $location) {
  console.log('TotalController is loaded');

  var ctrl = this;

  ctrl.totalDailyIntake = [];

  ctrl.getDailyTotal = function() {
    $http.get('/total').then(function(response) {
      ctrl.totalDailyIntake = response.data
      console.log('this is from the db', ctrl.totalDailyIntake);
    }).catch(function(err) {
      console.log('Error getting daily total from DB', err);
    });
  };
  ctrl.getDailyTotal();


}); //end controller
