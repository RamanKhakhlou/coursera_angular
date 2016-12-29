(function() {
  'use strict'

  angular.module('NarrowItDownApp', [])
    .service('MenuSearchService', MenuSearchService)
    .controller('NarrowItDownController', NarrowItDownController)
    .directive('foundItems', FoundItems)

  MenuSearchService.$inject = ['$http', '$q']
  function MenuSearchService($http, $q) {
    this.getMatchedMenuItems = function(searchTerm) {
      var deferred = $q.defer()
      $http({
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(function(response) {
        var items = []
        if(searchTerm) {
          items = response.data.menu_items.filter(item => item.description.indexOf(searchTerm) >= 0)
        }
        deferred.resolve(items)
      })
      return deferred.promise
    }
  }

  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this

    ctrl.searchTerm = ''
    ctrl.hasItems = false

    ctrl.search = function() {
      MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
        .then(found => { ctrl.found = found })
    }

    ctrl.remove = function(index) {
      ctrl.found.splice(index, 1)
    }

    ctrl.hasNoItems = function() {
      return ctrl.found && ctrl.found.length === 0
    }
  }

  function FoundItems() {
    return {
      templateUrl: './found-items.template.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: FoundItemsController,
      controllerAs: 'foundItemsCtrl',
      bindToController: true
    }
  }

  function FoundItemsController() {
    var ctrl = this

    ctrl.remove = function(index) {
      this.onRemove({ index })
    }
  }
})()
