Djello.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/boards');

    $stateProvider
      .state('boards', {
        abstract: true,
        url: '/boards',
        views: {
          "": {
            template: '<div ui-view></div>',
            controller: 'BoardsCtrl'
          },
          "boards-dropdown": {
            templateUrl: 'templates/boards/dropdown.html',
            controller: 'BoardsIndexCtrl'
          }
        },
        resolve: {
          boards: ['boardService', function(boardService) {
            return boardService.all();
          }],
        }
      })
      .state('boards.index', {
        url: '',
        templateUrl: '/templates/boards/index.html',
        controller: 'BoardsIndexCtrl'
      })
      .state('boards.new', {
        url: '/new',
        templateUrl: 'templates/boards/new.html',
        controller: 'BoardsNewCtrl'
      })
      .state('boards.show', {
        url: '/:id',
        templateUrl: '/templates/boards/show.html',
        controller: 'BoardsShowCtrl',
        resolve: {
          board: ['_', 'boards', '$stateParams', function(_, boards, $stateParams) {
            return _.find(boards, { id: +$stateParams.id });
          }],

        }
      });

  }]);
