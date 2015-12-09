var React = require('react');
var App = require('./App');
var AppFactory = React.createFactory(App);

module.exports = function(data){
  return AppFactory(data)
}
