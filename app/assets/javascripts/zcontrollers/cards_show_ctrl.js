Djello.controller('CardsShowCtrl', ['$scope', 'cardService', 'userService', function($scope, cardService, userService) {

  $scope.editingTitle = false;
  $scope.editingDesc = false;

  $scope.editCardTitle = function(id) {
    $scope.editingTitle = true;
    setTimeout(function(){
      document.getElementById('new-card-title-' + id).focus();
    }, 0);
  };

  $scope.updateCardTitle = function(card) {
    var title = angular.element('#new-card-title-' + card.id).val();
      if (title.length) {
        card.title = title;
        cardService.update(card, $scope.currentBoard);
      }
    $scope.editingTitle = false;
  };

  $scope.editCardDesc = function(id) {
    $scope.editingDesc = true;
    setTimeout(function() {
      document.getElementById('new-card-desc-' + id).focus();
    }, 0);
  };

  $scope.updateCardDesc = function(card) {
    var desc = angular.element('#new-card-desc-' + card.id).val();
    if (desc.length) {
      card.description = desc;
      cardService.update(card, $scope.currentBoard);
    }
    $scope.editingDesc = false;
  };

  $scope.markComplete = function(card) {
    // TODO move completed cards to their own list
    angular.element('#card-modal-' + card.id).modal("hide");
    angular.element('.modal-backdrop').remove();
    cardService.deleteCard(card, $scope.board).then(function(card) {
      for (var i = 0; i < $scope.list.cards.length; i++) {
        if ($scope.list.cards[i].id === card.id) {
          $scope.list.cards.splice(i, 1);
          break;
        }
      }
    });
  };

  $scope.cardAssignMember = function(user, card) {
    card.users.push(user);
    userService.addUserToCard(user, card);
  };

}]);
