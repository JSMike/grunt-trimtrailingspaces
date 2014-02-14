/*
 * grunt-trimtrailingspaces
 * https://github.com/paazmaya/grunt-trimtrailingspaces
 *
 * Copyright (c) 2013 Juga Paazmaya
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    eslint: {
      options: {
        config: 'eslint.json'
      },
      target: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ]
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },
    
    trimtrailingspaces: {
      main: {
        options: {
          encoding: 'ascii'
        },
        files: {
          'tmp': [
            'test/fixtures/*'
          ]
        }
      }
    },
    
    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
    
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['eslint', 'clean', 'trimtrailingspaces', 'nodeunit']);
  grunt.registerTask('default', ['test']);
};
