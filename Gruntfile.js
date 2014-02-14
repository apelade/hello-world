module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    protractor: {
    options: {
      configFile: "node_modules/protractor/referenceConf.js", // Default config file
      keepAlive: true, // If false, the grunt process stops when the test fails.
      noColor: false, // If true, protractor will not use colors in its output.
      args: {
        // Arguments passed to the command
      }
    },
    your_target: {
      options: {
        configFile: "myConf.js", // Target-specific config file
        args: {} // Target-specific arguments
      }
    },
  }
  });
  grunt.loadNpmTasks('grunt-protractor-runner');
  

};
