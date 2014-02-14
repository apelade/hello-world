// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.39.0.jar',
  seleniumPort: 4444,
  //chromeDriver: 'node_modules/protractor/selenium/chromedriver',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },

  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.
  specs: ['example-spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};
