module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
        sourceMap: true,
      },
      js: {
        src: [
          '*.module.js',
          '*.constant.js',
          '*.config.js',
          '*.run.js',
          '*.service.js',
          '*.ctrl.js',
          'services/**',
          'components/**/*.module.js',
          'components/**/*.constant.js',
          'components/**/*.config.js',
          'components/**/*.run.js',
          'components/**/*.service.js',
          'components/**/*.ctrl.js',
        ],
        dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js',
      },
      css: {
        src: [
          '*.css',
          'components/**/*.css',
        ],
        dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.css',
      },
      vendorJS: {
        src: [
          'node_modules/angular/angular.min.js',
          'node_modules/jquery/dist/jquery.min.js',
          'node_modules/angular-animate/angular-animate.min.js',
          'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
          'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
          'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
          'node_modules/@fortawesome/fontawesome-free/js/all.min.js',
        ],
        dest: 'dist/vendor.min.js',
      },
      vendorCSS: {
        src: [
          'node_modules/bootstrap/dist/css/bootstrap.min.css',
          'node_modules/angular-toastr/dist/angular-toastr.min.css',
        ],
        dest: 'dist/vendor.min.css',
      },
    },
    removelogging: {
      dist: {
        src: 'dist/<%= pkg.name %>-<%= pkg.version %>.js',
        dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js',
        options: {
          // see below for options. this is optional.
        }
      }
    },
    uglify: {
      js: {
        options: {
          sourceMap: true,
        },
        files: {
          'dist/<%= pkg.name %>-<%= pkg.version %>.min.js': ['dist/<%= pkg.name %>-<%= pkg.version %>.js']
        },
      },
    },
    copy: {
      main: {
        files: [
          // includes files within path and its sub-directories
          {
            expand: true,
            src: [
              'index.html',
              'api.php',
              'bankonus.php',
              'mail.payment.html',
              'components/**/*.html',
              'dist/**/*.min.css',
              'dist/**/*.min.js',
              'fonts/**',
              'images/**',
              // 'vendor/**',
              'composer.json',
            ],
            dest: 'build/',
          },
        ],
      },
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/<%= pkg.name %>-<%= pkg.version %>.min.css': ['dist/<%= pkg.name %>-<%= pkg.version %>.css'],
        },
      },
    },
    'string-replace': {
      inline: {
        files: {
          'build/index.html': 'build/index.html',
        },
        options: {
          replacements: [
            {
              pattern: '<script src="dist/bankonus-1.0.0.js"></script>',
              replacement: '<script src="dist/bankonus-1.0.0.min.js"></script>',
            },
            {
              pattern: '<base href="/" />',
              replacement: '<base href="/Development/bankonus/" />',
            },
          ]
        }
      }
    },
    clean: ['build/'],
    watch: {
      scripts: {
        files: [
          '*.module.js',
          '*.constant.js',
          '*.config.js',
          '*.run.js',
          '*.service.js',
          '*.ctrl.js',
          'services/**',
          'components/**/*.js',
        ],
        tasks: ['prod-without-logging'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-remove-logging");
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('default', ['concat']);
  grunt.registerTask('prod-without-logging', ['concat', 'uglify', 'cssmin', 'clean', 'copy']);
  grunt.registerTask('prod', ['concat', 'removelogging', 'uglify', 'cssmin', 'clean', 'copy', 'string-replace']);
};