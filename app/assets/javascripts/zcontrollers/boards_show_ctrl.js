Djello.controller('BoardsShowCtrl',
  ['$scope', '$state', 'Auth', 'board', 'userService',
  function($scope, $state, Auth, board, userService, users, inviter) {

    $scope.allUsers = [];


    if (board) {
      $scope.board = board;
    } else {
      $state.go('boards.index');
    }

    userService.all().then(function(result){
      $scope.allUsers = result;

    });



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
