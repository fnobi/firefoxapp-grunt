module.exports = function(grunt) {
        grunt.initConfig({
                pkg: grunt.file.readJSON('package.json'),
                watch: {
                        javascripts: {
                                files: 'src/**/*.js',
                                tasks: []
                        },
                        stylesheets: {
                                files: 'src/sass/*.scss',
                                tasks: ['compass:dev']
                        }
                },
                compass: {
                        dist: {
                                options: {
                                        config: 'config/compass.config.dist.rb',
                                        environment: 'production'
                                }
                        },
                        dev: {
                                options: {
                                        config: 'config/compass.config.dev.rb',
                                        environment: 'development'
                                }
                        }
                }
        });

        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-compass');

        grunt.registerTask('default', ['watch']);
        grunt.registerTask('test', []);
};