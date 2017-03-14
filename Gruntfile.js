module.exports = function(grunt){
  grunt.initConfig({

	//WEB SERVICE'S CONFIG
    browserSync: {
      dev: {
          bsFiles: {
              src : ['app/css/scriptyAtom.css','app/index.html']
          },
          options: {
            server: './app'
          }
      }
    }  
  });
  
  //LOAD PLUGINS GRUNT
  grunt.loadNpmTasks('grunt-browser-sync');
  
  //TASK FOR DEV AND TESTE
  grunt.registerTask('default', [ 'browserSync']);
};
