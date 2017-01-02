(function() {
  'use strict'

  angular.module('MenuApp')
    .component('items', {
      templateUrl: 'app/components/items.template.html',
      bindings: {
        items: '<'
      }
    })
})()
