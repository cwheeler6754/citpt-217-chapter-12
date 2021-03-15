//IIFE is an anonymous function that is inside parenthesis. This lets the browser know not to run it yet.
(function (window) {
  'use strict';
  /*
  This sets up a variable called App.
  If there is not an App property already for the window, it wil refer to a new empty object which is represented by {}.
  The operator || is teh default operator for the logical or operator.
  */
  var App = window.App || {};

  //This is a function called DataStore
  function DataStore() {
    //This assigns a constructor to create and customize a new object.
    this.data = {};
  }

  //This is using the property add and assigns a function to it. Key will store the email and val will be the order.
  DataStore.prototype.add = function (key, val) {
    this.data[key] = val;
  };

  //This looks up the value for key and returns it.
  DataStore.prototype.get = function (key) {
    return this.data[key];
  };

  //This looks up all the values for key and returns them.
  DataStore.prototype.getAll = function () {
    return this.data;
  };

  //This removes the key/val pair from an object when this is called.
  DataStore.prototype.remove = function (key) {
    delete this.data[key];
  };

  //This assigns DataStore to the global App property.
  App.DataStore = DataStore;
  window.App = App;
})(window);
