var Djello = angular.module('Djello', [
  'ui.router',
  'restangular',
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
