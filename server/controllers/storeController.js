var mongoose = require('mongoose')
var storeCust = mongoose.model('customer');
var storeOrd = mongoose.model('order');
var storePdt = mongoose.model('product');

module.exports = {
    index: function(request, response) {
        response.render('index',  {});
    },
    // get static product list from mongodb
    getPdts: function(request, response) {
        storePdt.find(function(err, mongoPdts) {
            response.send(mongoPdts);
        });
    },
    // get all customers
    getCusts: function(request, response) {
        storeCust.find(function(err, mongoCusts) {
            response.send(mongoCusts);
        })
    },
    // save new customer to mongodb
    createCust: function(request, response) {
        var a = new storeCust(request.body);
        a.save(function(err) {
            if(err){
                response.send('NO');
            } else {
                response.send('YES');
            }
        });
    },
    // remove existing customer from mongodb
    removeCust: function(request, response) {
        storeCust.remove({_id:request.body._id}, function(err) {
            if(err){
                response.send('NO');
            } else {
                response.send('YES');
            }
        })
    },
    // save new ordered to mongodb
    createOdred: function(request, response) {
        var b = new storeOrd(request.body);
        b.save(function(err){
            if(err) {
                response.send('NO');
            } else {
                response.send('YES');
            }
        })
    },
    // get all customer orders from mongodb
    getOdred: function(request, response) {
        storeOrd.find(function(err, mongoOrds) {
            response.send(mongoOrds);
        })
    }
}
