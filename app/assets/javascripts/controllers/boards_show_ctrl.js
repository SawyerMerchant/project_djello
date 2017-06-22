Djello.controller('BoardsShowCtrl',
  ['$scope', '$state', 'Auth', 'board', 'userService',
  function($scope, $state, Auth, board, userService, users) {

    $scope.allUsers = [];
    // $scope.invitableMembers = inviterFilter($scope.allUsers, $scope);

    if (board) {
      $scope.board = board;
    } else {
      $state.go('boards.index');
    }
    // $scope.users = users;

    userService.all().then(function(result){
      $scope.allUsers = result;
      // $scope.invitableMembers = $filter('invitableFilter')($scope.allUsers, $scope);

    });

    // $scope.getMembers = function(board){
    //   console.log("board.id: " + board.id);
    //
    // };


    $scope.inviteMember = function(email) {
      var newMember = userService.existingEmail(email, $scope.allUsers);
      if (newMember !== false) {
        board.users.push(newMember);
        userService.addUserToBoard(newMember, board);
        $scope.invitedEmail = "";
      } else {
        userService.sendInvitation(email, board);
        $scope.invitedEmail = "";
      }
    };





  }]);
