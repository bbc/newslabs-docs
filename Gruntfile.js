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
      },
      copy: {
          files: {
            cwd: 'docs/files',
            src: '**/*',
            dest: 'html/files/',
            expand: true
          },
          images: {
            cwd: 'docs/img',
            src: '**/*',
            dest: 'html/img/',
            expand: true
          },
          webimages: {
            cwd: 'docs/img',
            src: '**/*',
            dest: '_www/img/',
            expand: true
          }
      }
    });

    grunt.loadNpmTasks('grunt-md2html');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-rename');
    
    grunt.registerTask('default', ['clean:release', 'clean:build', 'md2html', 'rename:buildindex', 'rename:build', 'copy:images', 'copy:files', 'clean:build']);
    grunt.registerTask('www', ['clean:build', 'md2html', 'rename:buildindex', 'clean:releaseweb', 'rename:buildweb', 'copy:webimages', 'copy:files', 'clean:build']);
};
