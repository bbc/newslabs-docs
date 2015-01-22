module.exports = function(grunt) {
    grunt.initConfig({
      md2html: {
        multiple_files: {
          options: {
              layout: 'layout.html'
          },
          files: [{
            expand: true,
            src: ['docs/*.md'],
            dest: 'tmp',
            ext: '.html'
          }]
        }
      },
      watch: {
         files: ['docs/*', 'layout.html'],
         tasks: ['default']
      },
      clean: {
          build: ['tmp'],
          release: ['html']
      },
      rename: {
          build: {
            src: 'tmp/docs',
            dest: 'html'
        }
      }
    });

    grunt.loadNpmTasks('grunt-md2html');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-rename');
    
    grunt.registerTask('default', ['clean:release', 'clean:build', 'md2html', 'rename:build', 'clean:build']);
};