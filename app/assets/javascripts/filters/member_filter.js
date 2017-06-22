Djello.filter('inviter', function() {
  return function(usersToFilter, scope){
    // passing scope into filter:
    // *Don't modify scope
    // *Another strategy would be easier to test
    // https://stackoverflow.com/questions/17596246/access-scope-variables-from-a-filter-in-angularjs

    // console.log("usersToFilter:");
    // console.log(usersToFilter);
    // console.log("board.users");
    // console.log(scope.board.users);


    var returnUsers = usersToFilter.filter( function( el ) {
      return scope.board.users.indexOf( el ) < 0;
    });

    return returnUsers;
  };
});
