var fs = require('fs');
var path = require('path');

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

require('../src/server');
