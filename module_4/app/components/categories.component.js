(function() {
  'use strict'

  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'app/components/categories.template.html',
      bindings: {
        categories: '<'
      }
    })
})()
