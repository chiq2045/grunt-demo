module.exports = myTasks

function myTasks (grunt) {
  grunt.initConfig({
    copy: {
      main: {
        files: [
          {
            src: ['node_modules/jquery/dist/jquery.js'],
            flatten: true,
            expand: true,
            dest: 'client/vendor/'
          }
        ]
      }
    },
    clean: {
      vendor: ['client/vendor/*']
    }
  })

  grunt.registerTask('default', ['clean', 'build', 'test'])
  grunt.registerTask('build', ['copy'])
  grunt.registerTask('test', ['lint', 'prettify'])

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')
}
