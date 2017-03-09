angular.module('waterApp').controller('TotalController', function($http, $location, $scope) {
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



  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
 $scope.series = ['Series A', 'Series B'];
 $scope.data = [
   [65, 59, 80, 81, 56, 55, 40],
   [28, 48, 40, 19, 86, 27, 90]
 ];
 $scope.onClick = function (points, evt) {
   console.log(points, evt);
 };
 $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
 $scope.options = {
   scales: {
     yAxes: [
       {
         id: 'y-axis-1',
         type: 'linear',
         display: true,
         position: 'left'
       },
       {
         id: 'y-axis-2',
         type: 'linear',
         display: true,
         position: 'right'
       }
     ]
   }
 };

}); //end controller
