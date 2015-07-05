module.exports = function (grunt) {
    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-webpack');

    var webpackConfig = require('./webpack.config.js'),
        packageConfg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: packageConfg,
        webpack: {
            options: webpackConfig,
        },
        "webpack-dev-server": {
            options: webpackConfig,  
        },
        sass: {
            options: {
                outputStyle: 'compressed',
                includePaths: [
                    './node_modules/bootstrap-sass-official/assets/stylesheets',
                    './node_modules/font-awesome/scss/'
                ]
            },
            files: {
                './static/style.css': './src/style.scss'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        flatten: true,
                        cwd: './node_modules/font-awesome/fonts/',
                        src: ['*.ttf', '*.eot', '*.svg', '*.woff', '*.woff2'],
                        dest: './static/fonts/',
                        expand: true
                    },
                    {
                        flatten: true,
                        cwd: './src/img/',
                        src: ['*.png', '*.jpg', '*.gif'],
                        dest: './static/img/',
                        expand: true
                    }
                ]
            }
        },
        watch: {
            scss: {
                files: [
                    './src/*.scss'
                ],
                tasks: ['sass']
            },
            js: {
                files: [
                    './src/*.js'
                ],
                tasks: ['webpack']
            },
            config: {
                files: [
                    'Gruntfile.js',
                    'package.json'
                ],
                tasks: ['copy', 'sass']
            }
        },
    });    
    // Task definition
    grunt.registerTask('build', ['copy', 'sass', 'webpack']);
    grunt.registerTask('default', ['build', 'watch']);

};
