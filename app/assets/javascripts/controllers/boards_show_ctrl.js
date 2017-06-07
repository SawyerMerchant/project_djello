Djello.controller('BoardsShowCtrl',
  ['$scope', '$state', 'Auth', 'board',
  function($scope, $state, Auth, board) {

    if (board) {
      $scope.board = board;
    } else {
      $state.go('boards.index');
    }

    $scope.models = {
        selected: null,
        templates: [
            {type: "item", id: 2},
            {type: "container", id: 1, columns: [[], []]}
        ],
        dropzones: {
            "Ferb": [
                {
                    "type": "container",
                    "id": 1,
                    "columns": [
                        [
                            {
                                "type": "item",
                                "id": "1"
                            },
                            {
                                "type": "item",
                                "id": "2"
                            }
                        ],
                        [
                            {
                                "type": "item",
                                "id": "3"
                            }
                        ]
                    ]
                },
                {
                    "type": "item",
                    "id": "4"
                },
                {
                    "type": "item",
                    "id": "5"
                },
                {
                    "type": "item",
                    "id": "6"
                }
            ]
        }
    };

    // $scope.$watch('models.dropzones', function(model) {
    //     $scope.modelAsJson = angular.toJson(model, true);
    // }, true);

  }]);
