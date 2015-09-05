module.exports = function(grunt) {
// Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {		
        banner: '/*! create by <%= pkg.name %> the create time: <%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %> */\n'
      },
      static_mappings:{  //��̬��Դ����Ŀ¼ ��ָ������������ȥ
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
  // ���ذ��� "uglify" ����Ĳ����
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Ĭ�ϱ�ִ�е������б�
  grunt.registerTask('default', ['uglify','concat','watch']);
};