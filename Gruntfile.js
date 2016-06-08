module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			docs: {
				options: {
					style: 'compressed',
					loadPath: 'css-dev'
				},
				files: {
					'assets/css/main.css': 'css-dev/main.scss',
				}
			}
		},
		watch: {
			grunt: {
				options: {
					reload: true
				},
				files: ['Gruntfile.js']
			},
			styles: {
				files: [
					'css-dev/*.scss',
					'css-dev/**/*.scss'
				],
				tasks: ['sass']
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['sass']);
	grunt.registerTask('default', ['watch']);

};
