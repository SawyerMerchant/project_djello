Djello.filter('inviter', function() {
  return function(usersToFilter, boardUsers){

    var boardEmails = boardUsers.map(function(user) {
      return user.email;
    });

    var returnUsers = usersToFilter.filter( function( el ) {
      return !boardEmails.includes(el.email);
    });
    console.log("returnUsers:");
    console.log(returnUsers);

    return returnUsers;
  };
});
