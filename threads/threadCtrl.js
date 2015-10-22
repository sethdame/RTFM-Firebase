angular.module('rtfmApp')
  .controller('ThreadCtrl', function ($scope, threadRef) {
    var thread = threadRef.$asObject();

    thread.$bindTo($scope, 'thread');

    $scope.comments = commentsRef.$asArray();

    $scope.createComment = function (username, text) {
      $scope.comments.$add({
        username: username,
        text: text
      });
    };
  });