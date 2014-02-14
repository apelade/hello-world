var express = require('express');
var startApp = require('./lib');
describe('angularjs homepage', function() {
  var server; 
  beforeEach(function() { 
    server = startApp();
  });
  afterEach(function() { server.close(); });
  it('should be titled Express', function() {
    browser.get('http://localhost:3000');
    var title = browser.driver.getTitle();
    expect(title).toEqual('Express');
  });
});
