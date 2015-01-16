var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
    name:  String,
    Created: String,
    hidden: Boolean
});

// Error validation?
// customerSchema.path('name').required(true, 'User name cannot be blank');
mongoose.model('customer', customerSchema);

var orderSchema = new mongoose.Schema({
    name: String,
    qty:  Number,
    pdt: String,
    date: String
});

// Error validation?
mongoose.model('order', orderSchema);

var productSchema = new mongoose.Schema({
    name: String
},{collection : 'products'});

mongoose.model('product', productSchema);