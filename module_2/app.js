(function() {
  'use strict'
  angular.module('shopping', [])
    .service('ShoppingService', ShoppingService)
    .controller('ShoppingBuyController', ShoppingBuyController)
    .controller('ShoppingBoughtController', ShoppingBoughtController)

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

  ShoppingBuyController.$inject = ['ShoppingService']
  function ShoppingBuyController(ShoppingService) {
    var service = this

    service.items = ShoppingService.getBuy()

    service.buy = function(index) {
      ShoppingService.buy(index)
    }
  }

  ShoppingBoughtController.$inject = ['ShoppingService']
  function ShoppingBoughtController(ShoppingService) {
    var service = this
    service.items = ShoppingService.getBought()
  }
})()
