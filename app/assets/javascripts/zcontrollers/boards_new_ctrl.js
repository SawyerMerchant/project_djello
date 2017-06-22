Djello.controller('BoardsNewCtrl', ['$scope', '$state', 'Auth', 'boards', function($scope, $state, Auth, boards) {

    $scope.boards = boards;
    $scope.boardParams = {};
    $scope.create = function() {
      boards.create($scope.boardParams)
        .then(function(response) {
          $scope.boards.push(response);
          $state.go('boards.show', { id: response.id });
        }, function(response) {
          console.error(response);
        });
    };
  }]);
