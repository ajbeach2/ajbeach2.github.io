module.exports = function(grunt) {
    // Combine all files in src/
    grunt.initConfig({

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['_js/spin.min.js', '_js/ladda.min.js', '_js/ladda.jquery.min.js'],
                dest: '_js/all.js'
            }
        },

        uglify: {
            options: {
                mangle: {
                    except: ['jQuery', '$']
                }
            },
            my_target: {
                files: {
                    'js/all.min.js': ['_js/all.js']
                }
            }
        },
        clean: {
            js: ["_js/all.js"]
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify', 'clean']);
}