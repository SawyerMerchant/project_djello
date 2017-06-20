Djello.factory('boardService', ['_', 'Restangular', function(_, Restangular) {

    var _boards = [];
    var _users = [];
    var _sharedBoards = [];

    Restangular.extendCollection('boards', function(collection) {
      collection.create = function(params) {
        return Restangular.all('boards').post(params);
      };

      collection.destroy = function(id) {
        return Restangular.one('boards', +id).remove();
      };

      return collection;
    });


    var boardService = {};

    boardService.all = function() {
      if (_boards.length) {
        return _boards;
      }
      _boards = Restangular.all('boards').getList();
      return _boards;
    };

    // boardService.getUsers = function() {
    //   if (_users.length) {
    //     return _users;
    //   }
    //   _users = Restangular.all('lists').getList();
    //   return _users;
    // };


    return boardService;

  }]);
