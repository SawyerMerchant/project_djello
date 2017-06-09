Djello.controller('BoardsShowCtrl',
  ['$scope', '$state', 'Auth', 'board',
  function($scope, $state, Auth, board) {

    if (board) {
      $scope.board = board;
    } else {
      $state.go('boards.index');
    }

    // $scope.lists = {
    //
    //
    //     // selected: null,
    //     // templates: [
    //     //     {type: "item", id: 2},
    //     //     {type: "container", id: 1, columns: [[], []]}
    //     // ],
    //   };

  }]);
