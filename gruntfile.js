module.exports = function( grunt ) {

	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
 	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );

    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),
    	cssmin: {
			options: {
        		separator: '\n\n',
				banner: '/**\n * <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>' +
			            '\n * Description: FoxSlider Core is a jQuery Plugin with complete implementation of a full page slider.' +
			            '\n * License: <%= pkg.license %>' +
			            '\n * Author: <%= pkg.author %>' +
			            '\n */\n\n'
			},
      		target: {
	        	files: {
	          		'dist/foxslider.min.css': [ 'src/main.css', 'src/basic.css', 'src/regular.css' ]
	        	}
      		}
    	},
        concat: {
      		options: {
        		separator: '\n\n',
				banner: '/**\n * <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>' +
			            '\n * Description: FoxSlider Core is a jQuery Plugin with complete implementation of a full page slider.' +
			            '\n * License: <%= pkg.license %>' +
			            '\n * Author: <%= pkg.author %>' +
			            '\n */\n\n'
      		},
      		dist: {
        		src: [
					'src/core.js'
				],
        		dest: 'dist/foxslider.js'
      		}
    	},
    	uglify: {
			options: {
				banner: '/**\n * <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>' +
			            '\n * Description: FoxSlider Core is a jQuery Plugin with complete implementation of a full page slider.' +
			            '\n * License: <%= pkg.license %>' +
			            '\n * Author: <%= pkg.author %>' +
			            '\n */\n\n'
			},
      		main_target: {
	        	files: {
	          		'dist/foxslider.min.js': [ 'dist/foxslider.js' ]
	        	}
      		}
    	}
    });

    grunt.registerTask( 'default', [ 'concat', 'uglify' ] );
};
