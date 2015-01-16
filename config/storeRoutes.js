
var storeCtrl = require('./../server/controllers/storeController.js');
module.exports = function Routes(app) {

  // EXPRESS
  app.get('/', function(req,res) {storeCtrl.index(req,res);});

  // Getting products data from mongodb
  app.get('/getProducts', function(req,res) {storeCtrl.getPdts(req,res);})
  
  // Getting customers data from mongodb
  app.get('/getCustomers', function(req,res) {
    storeCtrl.getCusts(req,res);
  })
  
  // Creates a customer and save to mongodb
  app.post('/createCustomer', function(req,res) {
    storeCtrl.createCust(req,res);
  })
  
  // Removes customer from mongodb
  app.post('/removeCustomer', function(req,res) {
    storeCtrl.removeCust(req,res);
  })
  
  // save customer order to mongodb
  app.post('/createOrdered', function(req,res) {
    storeCtrl.createOdred(req,res);
  })

  // get customer order from mongodb
  app.get('/getOrderedPdts', function(req,res) {
    storeCtrl.getOdred(req,res);
  })
};
