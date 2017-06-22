Djello.factory('userService', ['_', 'Restangular', function(_, Restangular) {

    var _allUsers = [];
    var userService = {};

    userService.all = function() {
      if (_allUsers.length) {
        return _allUsers;
      }
      _allUsers = Restangular.all('users').getList();
      return _allUsers;
    };


    userService.existingEmail = function(email, users) {
      _user = _.find(users, function(o) {return o.email == email; });

      if (typeof _user != 'undefined') {
        return _user;
      } else {
        return false;
      }
    };

    userService.addUserToBoard = function(user, board) {
      var boardMembers = Restangular.all('boards_users');
      var newInvitation = {board_id: board.id, user_id: user.id};
      boardMembers.post(newInvitation);
    };

    userService.sendInvitation = function(email, board) {
      console.log("Need an invitation for " + email);
    };

    return userService;

  }]);
