//IIFE is an anonymous function that is inside parenthesis. This lets the browser know not to run it yet.
(function (window) {
  'use strict';
  var App = window.App || {};

  //This function sets the parameters for a truckId and db.
  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }

  //This creates an order and when it is called, it pulls the email address for the order and the order details.
  Truck.prototype.createOrder = function (order) {
    console.log('Adding order for ' + order.emailAddress);
    this.db.add(order.emailAddress, order);
  };

  //This will remove an order after it is delivered.
  Truck.prototype.deliverOrder = function (customerId) {
    console.log('Delivering order for ' + customerId);
    this.db.remove(customerId);
  };

  /*
  This retrives all the info through the getAll declaration, passes them to an array containing only keys.
  This array it named customerIdArray. This get the order associated with an Id.
  bind.this is how to fix an error. It sets this from undefined and returns a new function that passed in to bind (id).
  */
  Truck.prototype.printOrders = function () {
    var customerIdArray = Object.keys(this.db.getAll());

    console.log('Truck #' + this.truckId + ' has pending orders:');
    customerIdArray.forEach(function (id) {
      console.log(this.db.get(id));
    }.bind(this));
  };

  //This assigns Truck to the global app property.
  App.Truck = Truck;
  window.App = App;
})(window);
