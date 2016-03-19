/**
 * Created by Robert Le Monds on 3/19/2016.
 */

module.exports = function(grunt){

    grunt.initConfig({

        // basic minify
        pkg: grunt.file.readJSON('package.json'),

        //name of plugin
        cssmin: {
            combine: {
                files: {
                    'css/main.css': ['css/style.css']
                }
            }
        }

    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Execute
    grunt.registerTask('default', ['cssmin'])

};
