/*jslint node: true */
'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['scss/style.scss'],
        tasks: ['compileSass']
      }
    },
    sass: {
      dist: {
        options: {
					style: 'expanded'
				},
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass', 'watch']);
  grunt.registerTask('compileSass', ['sass']);
};