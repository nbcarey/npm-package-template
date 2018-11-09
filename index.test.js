// allows "requires('^foo/bar')" look for it in the root of the application
// (aka nearest package.json)
require('rooty')();
require('^test/setup');

const foobar = require('.');

describe('foobar()', function() {

  it('should throw', function() {

    expect(foobar).to.throw();

  });

});
