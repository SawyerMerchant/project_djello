Djello.controller('BoardsIndexCtrl', ['$scope', 'Auth', 'boards',
  function($scope, Auth, boards) {

    $scope.boards = boards;

  }]);
