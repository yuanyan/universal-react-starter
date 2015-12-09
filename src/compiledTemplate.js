var _ = require('lodash');
var fs = require('fs');

// using custom template delimiters
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

var compiled = _.template(fs.readFileSync( __dirname + '/index.jst'));

module.exports = compiled;
