miniStore.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/javascripts/partials/customer.html'
    })
    .when('/customer', {
      templateUrl: '/javascripts/partials/customer.html'
    })
    .when('/order', {
      templateUrl: '/javascripts/partials/order.html'
    })
    .otherwise({
      redirectTo: '/'
    })
})