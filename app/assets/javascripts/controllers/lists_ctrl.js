Djello.controller("NestedListsDemoController", function($scope) {

    $scope.models = {
        selected: null,
        templates: [
            {type: "item", id: 2},
            {type: "container", id: 1, columns: [[], []]}
        ],
        dropzones: {
            "A": [
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
            ],
            "B": [
                {
                    "type": "item",
                    "id": 7
                },
                {
                    "type": "item",
                    "id": "8"
                },
                {
                    "type": "container",
                    "id": "2",
                    "columns": [
                        [
                            {
                                "type": "item",
                                "id": "9"
                            },
                            {
                                "type": "item",
                                "id": "10"
                            },
                            {
                                "type": "item",
                                "id": "11"
                            }
                        ],
                        [
                            {
                                "type": "item",
                                "id": "12"
                            },
                            {
                                "type": "container",
                                "id": "3",
                                "columns": [
                                    [
                                        {
                                            "type": "item",
                                            "id": "13"
                                        }
                                    ],
                                    [
                                        {
                                            "type": "item",
                                            "id": "14"
                                        }
                                    ]
                                ]
                            },
                            {
                                "type": "item",
                                "id": "15"
                            },
                            {
                                "type": "item",
                                "id": "16"
                            }
                        ]
                    ]
                },
                {
                    "type": "item",
                    "id": 16
                }
            ]
        }
    };

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});

// Djello.controller('ListsIndexCtrl',
//   [ '$scope', 'boardService', 'userService', 'listService',
//     function($scope, boardService, userService, listService) {
//
//       $scope.currentUser = userService.getCurrentUser();
//       $scope.boards = boardService.getBoards();
//
//       $scope.editingTitle = {};
//       $scope.editingDesc = {};
//
//       $scope.addList = function() {
//         listService.addList($scope.currentBoard);
//       };
//
//       $scope.editListTitle = function(id) {
//         $scope.editingTitle[id] = true;
//         setTimeout(function(){
//           document.getElementById('new-list-title-' + id).focus();
//         }, 0);
//       };
//
//       $scope.updateTitle = function(list) {
//         var title = angular.element('#new-list-title-' + list.id).val();
//           if (title.length) {
//             list.title = title;
//             listService.update(list, $scope.currentBoard);
//           }
//         $scope.editingTitle = {};
//       };
//
//       $scope.editListDesc = function(id) {
//         $scope.editingDesc[id] = true;
//         setTimeout(function() {
//           document.getElementById('new-list-desc-' + id).focus();
//         }, 0);
//       };
//
//       $scope.updateListDesc = function(list) {
//         var desc = angular.element('#new-list-desc-' + list.id).val();
//         if (desc.length) {
//           list.description = desc;
//           listService.update(list, $scope.currentBoard);
//         }
//         $scope.editingDesc = {};
//       };
//
//       $scope.deleteList = function(list) {
//         listService.deleteList(list, $scope.currentBoard).then(function(list) {
//           for (var i = 0; i < $scope.currentBoard.lists.length; i++) {
//             if ($scope.currentBoard.lists[i].id === list.id) {
//               $scope.currentBoard.lists.splice(i, 1);
//               break;
//             }
//           }
//         });
//       };
//
//     }
//   ]);
