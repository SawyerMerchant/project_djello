Djello.controller('BoardsCtrl',
  ['$scope', '$state', 'Auth', 'boards',
  function($scope, $state, Auth, boards) {

    $scope.boards = boards;

    $scope.destroy = function(id) {
      boards.destroy(id)
        .then(function(response) {
          console.log(response);
          var index = _.findIndex($scope.boards, function(board) {
            return +id === board.id;
          });
          $scope.boards.splice(index, 1);
          $state.go('boards.index');
        }, function(response) {
          console.error(response);
        });
    };
  }]);
