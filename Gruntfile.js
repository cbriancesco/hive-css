module.exports = function(grunt) {
	grunt.initConfig({
		stylus: {
			compile: {
				options: {
					compress: false
				},
				files: {
					'./public/theme/css/_style.css': ['./public/theme/css/_style.styl']
				}
			}
		},
		watch: {
			// Watch stylus files in "styl" directory
			stylus: {
				files: ['./public/theme/css/*/*.styl'],
				tasks: ['stylus']
			}
		}
	});
 
	// Load the plugin that provides the "watch" & "stylus" tasks.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-stylus');
 
	// Default task(s).
	grunt.registerTask('default', ['watch']);
};