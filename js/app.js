var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			url: '/index.html'
		})
		.when('/login', {
			url: '/login.html'
		})
		.when('/threads', {
			url: '/threads/:threads.html'
		})
		.when('thread/:threadId', {
  templateUrl: 'views/thread.html',
  controller: 'ThreadCtrl',
  resolve: {
    threadRef: function (ThreadService, $route) {
      return ThreadService.getThread($route.current.params.threadId);
    },
    commentsRef: function (ThreadService, $route) {
      return ThreadService.getComments($route.current.params.threadId);
    }
  }
})
		.otherwise({
			redirectTo: '/'
		})
});

app.run(function($rootScope, $location, EnvironmentService){
  $rootScope.$on($routeChangeStart, function(event, next, current){
    if(EnvironmentService.getUserName() === true){
    	$rootScope.username = getUserName();
    } else {
    	$location.path('/login')
    }
  });
});

