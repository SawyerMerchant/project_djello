Djello.factory('listService',
  ['Restangular', 'boardService',
    function(Restangular, boardService) {

      var _boards = boardService.all();

      var addList = function(board, title) {

        var newList = {
          list: {
            title: title,
            description: 'Sample Description',
            board_id: board.id
          }
        };

        return Restangular.all('lists').post(newList).then(function(list) {

          if (board.lists) {
            board.lists.push(list);
          } else {
            board.lists = [list];
          }

          return list;
        });
      };

      var deleteList = function(list, board) {
        return Restangular.one('lists', list.id).remove().then(function(response) {

          for (var i = 0; i < _boards.length; i++) {
            if (board.id === _boards[i].id) {
              if (_boards[i].lists) {
                for (var j = 0; j < _boards[i].lists.length; j++) {
                  if (list.id === _boards[i].lists[j].id) {
                    _boards[i].lists.splice(j, 1);
                    break;
                  }
                }
              }
            }
          }
          return list;
        });
      };

      var update = function(list, board) {

        return Restangular.one('lists').customPUT(list, list.id).then(function(list) {

          for (var i = 0; i < board.lists.length; i++) {
            if (board.lists[i].id === list.id) {
              board.lists[i].title = list.title;
              board.lists[i].description = list.description;
            }
          }

        }, function(response) {
          console.log(response);
        });

      };

      return {
        addList: addList,
        deleteList: deleteList,
        update: update
      };

    }]);
