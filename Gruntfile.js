module.exports = function(grunt) {

  // grunt.registerTask('speak', function () {
  //   console.log("I'm speaking");
  // });
  // grunt.registerTask('yell', function () {
  //   console.log("I'm YELLING!");
  // });
  // grunt.registerTask('both', ['speak','yell']);

  // grunt.registerTask('default', ['speak','yell']);

  // Project configuration - holds all configs for all our tasks
  grunt.initConfig({
    concat: {
      js: {               // dist = distribution
        src: ['js/1.js', 'js/2.js'],
        dest: 'build/js/scripts.js',
      },
      css: {               // dist = distribution
        src: ['css/1.css', 'css/2.css'],
        dest: 'build/css/styles.css',
      },
    },

    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['concat:js'],
      },
      css: {
        files: ['css/**/*.css'],
        tasks: ['concat:css'],
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'watch']);

};