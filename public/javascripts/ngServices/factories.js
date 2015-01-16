// Create customer factory
miniStore.factory('customerFactory', function($http) {
          
    var customers = [];
    
    var custFactory = {
      getCustomers: function(callback) {
        $http.get('/getCustomers').success(function(dataReturn) {
          customers = dataReturn;
          callback(customers);
        })       
      },

      addCustomer: function(info) {
        var date = new Date();
        var cust = {
          name: info.newC,
          Created: (date.getMonth()+1) + " " + date.getDate() + " " + date.getFullYear()
        };

        $http.post('/createCustomer', cust).success(function(dataReturn) {
          
          if(dataReturn == 'YES') {
            customers.push(cust);
          }
        });
      },

      check_if_exist: function(info) {
        var flag = true;
        for(var i=0, c=customers.length; i<c; i++) {
          if(customers[i].name === info.newC) {
            flag = false;
            break;
          }
        }
        return flag;
      },

      removeCustomer: function(info) {
        $http.post('/removeCustomer', info).success(function(dataReturn){

          if(dataReturn == 'YES') {
            for(var i=0, c=customers.length; i<c; i++){
              if(customers[i]['name'] == info.name) {
                customers.splice(i,1);
                break;
              }
            }
          }
        })
      }
    }

    return custFactory;
})

// Create order factory
miniStore.factory('orderFactory', function($http) {

    var products = [];
    var orderedPdts = [];


    var odrFactory = {
      getProducts: function(callback) {
        $http.get('/getProducts').success(function(dataReturn) {
          products = dataReturn;
          callback(products);
        })
      },

      addOrder: function(info) {
        var date = new Date();
        var ordered = {
          name: info.selectCust,
          qty: info.selectQty,
          pdt: info.selectPdt,
          date: (date.getMonth()+1) + " " + date.getDate() + " " + date.getFullYear()
        }

        $http.post('/createOrdered', ordered).success(function(dataReturn) {
          if(dataReturn == 'YES') {
            orderedPdts.push(ordered);
          }
        })
      },

      getOrdered: function(callback) {
        $http.get('/getOrderedPdts').success(function(dataReturn){
          orderedPdts = dataReturn;
          callback(orderedPdts);
        })
      }
    }

    return odrFactory;
})