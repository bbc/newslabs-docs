module.exports = function(grunt) {
    grunt.initConfig({
      md2html: {
        multiple_files: {
          options: {
              layout: 'layout.html'
          },
          files: [{
            expand: true,
            src: ['docs/**/*.md'],
            dest: 'tmp',
            ext: '.html'
          }]
        }
      },
      watch: {
         files: ['docs/**', 'layout.html'],
         tasks: ['default']
      },
      clean: {
          build: ['tmp'],
          release: ['html'],
          releaseweb: ['_www']
      },
      rename: {
          build: {
            src: 'tmp/docs',
            dest: 'html'
          },
          buildindex: {
            src: 'tmp/docs/README.html',
            dest: 'tmp/docs/index.html'
          },
          buildweb: {
            src: 'tmp/docs',
            dest: '_www'
          }
      }
    });

    grunt.loadNpmTasks('grunt-md2html');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-rename');
    
    grunt.registerTask('default', ['clean:release', 'clean:build', 'md2html', 'rename:buildindex', 'rename:build', 'clean:build']);
    grunt.registerTask('www', ['clean:build', 'md2html', 'rename:buildindex', 'clean:releaseweb', 'rename:buildweb', 'clean:build']);
};