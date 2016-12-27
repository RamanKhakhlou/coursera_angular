(function() {
  'use strict'
  angular.module('shopping', [])
    .service('ShoppingService', ShoppingService)
    .controller('ShoppingController', ShoppingController)

  function ShoppingService() {
    var buyList = [
      { name: "cookies", quantity: 10 },
      { name: "beer", quantity: 5 },
      { name: "chips", quantity: 2 },
      { name: "coffee", quantity: 2 },
      { name: "sugar", quantity: 1 }
    ]
    var boughtList = []

    this.buy = function(index) {
      var buyedItem = buyList.splice(index, 1)
      boughtList.push(buyedItem[0])
    }
    this.getBuy = function() {
      return buyList
    }
    this.getBought = function() {
      return boughtList
    }
  }

  ShoppingController.$inject = ['$scope', 'ShoppingService']
  function ShoppingController($scope, ShoppingService) {
    $scope.buyItems = ShoppingService.getBuy()
    $scope.boughtItems = ShoppingService.getBought()

    $scope.buy = function(index) {
      ShoppingService.buy(index)
    }
  }
})()
