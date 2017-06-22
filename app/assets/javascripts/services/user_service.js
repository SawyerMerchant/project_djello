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
      // TODO move Restangular.all call out of this function
      var boardMembers = Restangular.all('boards_users');
      var newInvitation = {board_id: board.id, user_id: user.id};
      boardMembers.post(newInvitation);
    };

    userService.addUserToCard = function(userObj, cardObj) {
      var cardMembers = Restangular.all('cards_users');
      var newAssignment = {card_id: cardObj.id, user_id: userObj.id};
      cardMembers.post(newAssignment);
    };

    userService.sendInvitation = function(email, board) {
      console.log("Need an invitation for " + email);
    };

    return userService;

  }]);
