var ReactDOM = require('react-dom');
var React = require('react');
var renderApp = require('./renderApp');
var fetchData = require('./fetchData');

if (!APP_DATA) {
  fetchData().then(init)
} else {
  init(APP_DATA);
}

function init(data){
  ReactDOM.render(renderApp(data), document.getElementById('root'))
}
