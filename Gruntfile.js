module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: [ "dist/*.js" ],
		// browserify: {
		// 	dist: {
		// 		src: "lib/author-data.js",
		// 		dest: "dist/author-data.js",
		// 		options: {
		// 			browserifyOptions: { standalone: "AuthorData" }
		// 		}
		// 	}
		// },
		// wrap2000: {
		// 	dist: {
		// 		src: 'dist/author-data.js',
		// 		dest: 'dist/author-data.js',
		// 		options: {
		// 			header: "/*\n * author-data\n * (c) 2014 Beneath the Ink, Inc.\n * Version <%= pkg.version %>\n */\n"
		// 		}
		// 	}
		// },
		jst: {
			templates: {
				options: {
				 	templateSettings: {
					 	interpolate : /\{\{(.+?)\}\}/g
					},
					processName: function (filename) {
						var name = filename.split('/');

						return name[name.length - 1].split('.')[0];
						
					}
				},
				files: {
				 	"public/dist/templates.js": ["client/**/*.html"]
				}
				 
			}
		},
		concat: {
		    dist: {
		      src: [ './client/**/*.js', './public/scripts/main.js' ],
		      dest: './public/dist/built.js',
		    },
		},
		uglify: {
			dist: {
				src: "./public/dist/built.js",
				dest: "./public/dist/built.min.js"
			}
		},
		less: {
	      build: {
	        files: {
	          'public/dist/styles.css': ['client/**/*.less','public/**/*.less']
	        }
	      }
	    },
		watch: {
			scripts: {
				files: [ "./client/**/*.js", "./public/scripts/*.js" ],
				tasks: [ 'concat', 'uglify' ],
				options: { spawn: false }
			},
			templates: {
				files: [ "client/**/*.html" ],
				tasks: [ 'jst' ],
				options: { spawn: false }
			},
			styles: {
				files: [ "**/*.less" ],
				tasks: [ 'less' ],
				options: { spawn: false }
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-wrap2000');
	grunt.loadNpmTasks('grunt-contrib-jst');
	grunt.loadNpmTasks('grunt-contrib-less');



	grunt.registerTask('default', [ 'jst', 'concat', 'less', 'clean' ]);

}