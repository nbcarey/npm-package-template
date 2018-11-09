// allows "requires('^foo/bar')" look for it in the root of the application
// (aka nearest package.json)
const rooty = require('rooty');
rooty();

const chai = require('chai');

global.should = chai.should();
global.expect = chai.expect;
