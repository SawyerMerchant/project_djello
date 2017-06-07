var Djello = angular.module('Djello', [
  'ui.router',
  'restangular',
  'Devise',
  'dndLists'
]);

Djello.constant('_', window._);

Djello.run(function ($rootScope) {
  $rootScope._ = window._;
});

Djello.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }]);

Djello.config(['RestangularProvider', function(RestangularProvider) {

  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

}]);
