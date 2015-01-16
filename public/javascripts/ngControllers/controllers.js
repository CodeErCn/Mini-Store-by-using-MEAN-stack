miniStore.controller('addAcustCtrl', function($scope, customerFactory) {
    $scope.add = function() {
      if(customerFactory.check_if_exist($scope)) {
        customerFactory.addCustomer($scope);
        $scope.newC = '';
      } else {
        alert("The name is already in our database!");
        $scope.newC = '';
      }
    }
})

miniStore.controller('displayCustomersCtrl', function($scope, customerFactory) {
    
    customerFactory.getCustomers(function(data){
      $scope.customers = data;
    });
    $scope.remove = function(customer) {
      customerFactory.removeCustomer(customer);
    }

})

miniStore.controller('orderCtrl', function($scope, customerFactory, orderFactory) {
  
  customerFactory.getCustomers(function(data) {
      $scope.customers= data;
  });
  
  orderFactory.getProducts(function(data) {
      $scope.products = data;
  });
  
  orderFactory.getOrdered(function(data) {
      $scope.orderedPdts = data;
  });
  
  $scope.placeOrder = function() {
    orderFactory.addOrder($scope);
    $scope.selectCust='';
    $scope.selectQty='';
    $scope.selectPdt='';
  }
})