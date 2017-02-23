angular.module('waterApp').controller('TotalController', function($http, $location) {
  console.log('TotalController is loaded');

  var ctrl = this;

  ctrl.getDailyTotal = function() {
    $http.get('/total').then(function(response) {
      ctrl.totalIntake = response.data
      console.log('this is from the db', ctrl.totalIntake);
    }).catch(function(err) {
      console.log('Error getting daily total from DB', err);
    });
  };

});
