Djello.factory('cardService', ['Restangular', 'boardService', 'listService', function(Restangular, boardService, listService) {


  var _boards = boardService.all();
  var _lists = listService.all();

  var all = function(list) {
    return Restangular.all('cards').customGETLIST('', {
      list_id: list.id
    }).then(function(cards) {
      return cards;
    });
  };


  var add = function(list, board) {
    var card = {
      card: {
        title: 'Sample title',
        description: 'Sample description',
        list_id: list.id
      }
    };
    return Restangular.all('cards').post(card).then(function(card) {

      if (list.cards) {
        list.cards.push(card);
      } else {
        list.cards = [card];
      }
      return card;
    }, function(response) {
      console.log(response);
    });
  };


  var update = function(card, board) {
    return Restangular.one('cards').customPUT(card, card.id);
  };

  var deleteCard = function(card, list) {
    return Restangular.one('cards', card.id).remove().then(function(response) {

      for (var i = 0; i < _lists.length; i++) {
        if (list.id === _lists[i].id) {
          if (_lists[i].cards) {
            for (var j = 0; j < _lists[i].cards.length; j++) {
              if (card.id === _lists[i].cards[j].id) {
                _lists[i].cards.splice(j, 1);
                break;
              }
            }
          }
        }
      }
      return card;
    });
  };

  return {
    all: all,
    add: add,
    update: update,
    deleteCard: deleteCard
  };

}]);
