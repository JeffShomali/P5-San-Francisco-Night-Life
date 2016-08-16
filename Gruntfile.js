module.exports = function(grunt) {
    grunt.initConfig({

        // Inline Configuration
        inlinecss: {
            main: {
                options: {},
                files: {
                    'dist/index.html': 'src/index.html'

                }
            }
        },

        //HTML Minification
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },

        // Minification configuration
        cssmin: {
            target: {
                files: {
                    'dist/css/style.css': ['src/css/style.css']
                }
            }
        },

     //   Image minimize configuration
              imagemin: { // Task
                  static: { // Target
                      options: { // Target options
                          optimizationLevel: 3,
                          svgoPlugins: [{
                              removeViewBox: false,

                          }],

                      },
                      files: { // Dictionary of files
                          'dist/images/SF-Walpaper.jpg': 'src/images/SF-Walpaper.jpg'
                      }
                  }
        },

        // Uglify configuration
        uglify: {
            my_target: {
                files: {
                    'dist/js/app.js': ['src/js/app.js'],

                }
            }
        },


    }); //end config

    // Loading Tasks
    // grunt.loadNpmTasks('grunt-inline-css');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['htmlmin', 'cssmin', 'uglify']);
};
