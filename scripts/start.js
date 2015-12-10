var fs = require('fs');
var path = require('path');
var webpack = require("webpack");

function readBabelRC() {
  var rcpath = path.join(__dirname, '..', 'src', '.babelrc');
  var source = fs.readFileSync(rcpath).toString();
  return JSON.parse(source);
}

function babelRegisterOnly(onlyList) {
  var config = readBabelRC();
  config.only = onlyList;
  require('babel-core/register')(config);
};

babelRegisterOnly([/src/]);

// start webpack
if(process.env.TARGET == 'dev'){
  // returns a Compiler instance
  webpack(require('../webpack.config'), function(err, stats) {
    var res = stats.toString({colors: true});
    console.log(res)
  });
}

require('../src/server');
