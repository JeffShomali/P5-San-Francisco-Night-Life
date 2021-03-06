module.exports = function(grunt) {
    grunt.initConfig({


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
        imagemin: { 
            static: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{
                        removeViewBox: false,

                    }],

                },
                files: { // Dictionary of files
                    'dist/images/SF-Walpaper.jpg': 'src/images/SF-Walpaper.jpg',
                    'dist/images/filter.gif': 'src/images/filter.gif',
                    'dist/images/marker.png': 'src/images/marker.png',
                    'dist/images/search.gif': 'src/images/search.gif',
                    'dist/images/selected.png': 'src/images/selected.png'

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

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['htmlmin', 'cssmin', 'uglify']);
};
