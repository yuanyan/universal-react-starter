require('./shimFetch');
var fs = require('fs');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var serve = require('koa-static');
var koa = require('koa');
var app = koa();

var compiledTemplate = require('./compiledTemplate');
var safeStringify = require('./safeStringify');
var fetchData = require('./fetchData');
var renderApp = require('./renderApp');

var _ = require('lodash');
// using custom template delimiters
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

app.use(serve(__dirname + '/../dist'));

app.use(function *(){

  this.set('Content-Type', 'text/html');

  var data = yield fetchData();

  // Here we're using React to render the outer body, so we just use the
  // simpler renderToStaticMarkup function, but you could use any templating
  // language (or just a string) for the outer page template
  var appHtml = ReactDOMServer.renderToString(renderApp(data))

  var html = compiledTemplate({
    title: '',
    assets: {
      js: {
        main: 'main.js',
        react: 'react.js'
      },
      css: {}
    },
    appHtml: appHtml,
    appData: safeStringify(data)
  });

  // Return the page to the browser
  this.body = html;

});

app.listen(3000);

console.log('listening on port 3000');
