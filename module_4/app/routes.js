(function() {
  'use strict'

  angular.module('MenuApp')
    .config(RouteConfig)

  RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider']
  function RouteConfig($stateProvider, $urlRouterProvider) {
    var homeState = {
      name: 'home',
      url: '/',
      component: 'home'
    }

    var categoriesState = {
      name: 'categories',
      url: '/categories',
      component: 'categories',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories()
        }]
      }
    }

    var itemsState = {
      name: 'items',
      url: '/items/{category}',
      component: 'items',
      resolve: {
        items: ['$transition$', 'MenuDataService', function($transition$, MenuDataService) {
          return MenuDataService.getItemsForCategory($transition$.params().category)
        }]
      }
    }

    $stateProvider.state(homeState)
    $stateProvider.state(categoriesState)
    $stateProvider.state(itemsState)

    $urlRouterProvider.otherwise('/')
  }
})()
