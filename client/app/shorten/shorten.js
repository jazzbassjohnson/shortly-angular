angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.error;
  $scope.link = {};
  $scope.addLink = function(){
    // if matches send to server
    // ^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$
    Links.addLinks($scope.link).then(function(resp){
      $scope.loading = false;
    },
    function(resp){
      $scope.error = 'WRONG URL DUDE!';
    });
  };
});
