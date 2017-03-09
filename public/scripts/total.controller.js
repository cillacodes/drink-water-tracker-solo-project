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



  $scope.labels = ["Feb 22", "Feb 23", "Feb 24", "Feb 25", "Feb 26", "Feb 27", "Feb 28", "Mar 1"];
 $scope.series = ['Series A'];
 $scope.data = [
   [7, 16, 16, 9, 19, 20, 6, 9],
 ];
 $scope.onClick = function (points, evt) {
   console.log(points, evt);
 };
 $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
 $scope.options = {
   scales: {
     yAxes: [
       {
         id: 'y-axis-1',
         type: 'linear',
         display: true,
         position: 'left'
       },
     ]
   }
 };

}); //end controller
