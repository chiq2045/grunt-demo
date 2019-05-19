module.exports = myTasks;

function myTasks(grunt) {
  grunt.initConfig({
    browserify: {
      main: {
        src: 'client/app.js',
        dest: 'dist/app.js'
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['client/index.html'],
            dest: 'dist/'
          },
        ],
      },
      vendor: {
        files: [
          {
            src: ['node_modules/jquery/dist/jquery.js'],
            flatten: true,
            expand: true,
            dest: 'dist/vendor/'
          },
        ],
      },
    },
    clean: {
      all: ['dist/*'],
      vendor: ['client/vendor/*'],
      main: ['dist/**/*.js', 'dist/**/*.html', '!dist/vendor/**.*']
    },
    watch: {
      main: {
        files: ['client/**/*/js', 'client/**/*.js'],
        tasks: ['clean:main', 'copy:main'],
        options: {
          livereload: true
        }
      }}
  });

  grunt.registerTask('default', ['clean:all', 'build']); 
  grunt.registerTask('build', ['browserify', 'copy']);
  grunt.registerTask('test', ['lint', 'prettify']);
  grunt.registerTask('dev', ['default', 'watch']);

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
}
