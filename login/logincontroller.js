var app = angular.module('rtfmApp');

app.controller('EnvironmentService', function($scope, $location){
	$scope.env = env;

	$scope.logMeIn = function(){
		alert(username);
	};

	$scope.$apply(function(){
    $location.path('/threads/' + user.uid)
	});


})