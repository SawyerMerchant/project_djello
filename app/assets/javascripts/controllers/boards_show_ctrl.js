Djello.controller('BoardsShowCtrl',
  ['$scope', '$state', 'Auth', 'board', 'userService',
  function($scope, $state, Auth, board, userService, users) {

    $scope.allUsers = [];

    if (board) {
      $scope.board = board;
    } else {
      $state.go('boards.index');
    }
    // $scope.users = users;

    userService.all().then(function(result){
      $scope.allUsers = result;
    });

    $scope.getMembers = function(board){
      console.log("board.id: " + board.id);

    };


    $scope.inviteMember = function(email) {
      $scope.users = userService.findByEmail(email, $scope.allUsers);
    };





  }]);
