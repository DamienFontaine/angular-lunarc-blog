module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      options: {
        keepalive: true
      },
      server: {}
    },
    jshint: {
      all: ['gruntfile.js', 'src/**/*.js']
    },
    browserify: {
      options: {
        extension: ['.js'],
        external: [
          "angular-resource"
        ]
      },
      blog: {
        src: 'src/**/*.js',
        dest: 'lib/angular-lunarc-blog.js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      blog: {
        files: {
          'lib/angular-lunarc-blog.min.js': ['lib/angular-lunarc-blog.js']
        }
      }
    },
    watch: {
      scripts: {
        files: 'src/**/*.js',
        tasks: ['jshint', 'browserify']
      }
    },
    ngdocs: {
      options: {
        dest: 'docs',
        title: "angular-lunarc-blog",
        html5Mode: false,
        scripts: [
          'bower_components/angular/angular.js',
          'bower_components/angular-animate/angular-animate.js'
        ]
      },
      api: {
        src: ['src/**/*.js'],
        title: 'Blog'
      }
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
    }
  });
  // Load NPM tasks
  require('load-grunt-tasks')(grunt);
  // Tasks
  grunt.registerTask('default', ['jshint', 'browserify', 'uglify']);
  grunt.registerTask('test', ['jshint','browserify', 'uglify', 'karma']);
  grunt.registerTask('docs', ['ngdocs', 'connect']);
  grunt.registerTask('build', ['browserify', 'uglify', 'ngdocs']);
};
