Djello.factory('boardService', ['_', 'Restangular', function(_, Restangular) {

    var _boards = [];

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

    return boardService;

  }]);
