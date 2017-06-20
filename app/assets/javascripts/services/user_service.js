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

    // userService.getMembers = function() {
    //   if (_users.length) {
    //     return _users;
    //   }
    //   _users = Restangular
    // };

    userService.findByEmail = function(email, users) {
      _user = _.find(users, function(o) {return o.email == email; });
      // console.log("_user is: ");
      // console.log( _user );
      if (typeof _user != 'undefined') {
        console.log("add user " + _user);
        return _user;
      } else {
        userService.sendInvitation();
      }
    };

    userService.sendInvitation = function(email) {
      console.log("Need an invitation for " + email);
    };

    return userService;

  }]);
