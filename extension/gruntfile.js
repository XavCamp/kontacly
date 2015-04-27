module.exports = function(grunt) {


	    grunt.initConfig({

        build: {
            path:       'build'
        },

        clean: {
            pkg: ['build']
        },

        copy: {
            pkg: {
                expand: true,
                cwd: 'extension',
                src: ['manifest.json', '_locales/**', 'html/**',  'images/**', 'lib/**/*.html'],
                dest: '<%= build.path %>'
            }
        },

        uglify: {
            pkg: {
                files: [
                    {
                        expand: true,
                        cwd: 'extension/js/lib',
                        src: ['**/*.js'],
                        dest: '<%= build.path %>/lib'
                    }
                ]
            }
        },

        cssmin: {
            pkg: {
                files: [
                    {
                        expand: true,
                        cwd: 'extension/css',
                        src: ['**/*.css'],
                        dest: '<%= build.path %>/css'
                    }
                ]
            }
        },

        compress: {
            pkg: {
                options: {
                    archive: '<%= build.path %>.zip'
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= build.path %>',
                        src: ['**/*'],
                        dest: '<%= build.version %>-<%= build.stage %>'
                    }
                ]
            }
        },

        watch: {
            all: {
                files: ['extension/**'],
                tasks: ['build']
            }
        }
    });



	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask(
        'build',
        'Package everything',
        ['clean', 'copy', 'uglify', 'cssmin', 'compress']
    );

};
