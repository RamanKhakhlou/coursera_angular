(function() {
  'use strict'

  angular.module('lunch-checker', [])
    .controller('LunchCheckerController', LunchCheckerController)

  LunchCheckerController.$inject = ['$scope']
  function LunchCheckerController($scope) {
    $scope.status = ''
    $scope.meal = ''
    $scope.alert = null
    $scope.checkLunch = function() {
      var meal = $scope.meal.split(',')
        .filter(m => m.trim().length)

      if(meal.length === 0) {
        $scope.status = 'Please enter data first'
        $scope.alert = true
      } else {
        $scope.status = meal.length <= 3 ? 'Enjoy!' : 'Too much!'
        $scope.alert = false
      }
    }
  }
})()
