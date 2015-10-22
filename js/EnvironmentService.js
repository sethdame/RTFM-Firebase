angular.module('rtfmApp')
  .service('EnvironmentService', function EnvironmentService($window) {
    return {
      getEnv: function () {
        return $window.env;
      }
    }

    this.saveUsername = function(username){
    	$window.localStorage.setItem('username', username);
    }

    this.getUsername = function(){
    	return $window.localStorage.getItem('username');
    }

  });