(function() {
  'use strict'

  angular.module('data')
    .service('MenuDataService', MenuDataService)

  MenuDataService.$inject = ['$http', 'BaseUrl']
  function MenuDataService($http, BaseUrl) {
    this.getAllCategories = function() {
      return $http({
        url: BaseUrl + 'categories.json'
      }).then(response => response.data)
    }

    this.getItemsForCategory = function(categoryShortName) {
      return $http({
        url: BaseUrl + 'menu_items.json?category=' + categoryShortName
      }).then(response => response.data.menu_items)
    }
  }
})()
