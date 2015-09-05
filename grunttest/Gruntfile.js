module.exports = function(grunt) {
// Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {		
        banner: '/*! create by <%= pkg.name %> the create time: <%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %> */\n'
      },
      static_mappings:{  //静态资源所在目录 ，指定从哪来到哪去
      	files:[{ 
			    src:'js/index.js',
					dest:'build/index.min.js'	
				},{ 
			    src:'js/main.js',
					dest:'build/main.min.js'	
				}]
      }    
    },
    concat:{
    	bar:{
				src:['build/*.js'],
				dest:'all/all.min.js',
			}
    },
    watch:{
   		files:['js/*.js'],
			tasks:['uglify','concat']
    }
  });
  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify','concat','watch']);
};