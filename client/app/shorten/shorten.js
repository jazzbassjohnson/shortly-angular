angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $route, $location, Links) {
  // Your code here
  $scope.audio = document.getElementById('successSound');
  $scope.link = {};
  $scope.addLink = function(){
    // if matches send to server
    // ^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$
    Links.addLinks($scope.link).then(function(resp){
      $scope.loading = false;
      $scope.audio.play();
    },
    function(resp){
      console.log('Invalid url');
    });
  };
  console.log($scope.audio);
  $scope.audio.addEventListener('ended', function(){
    $route.reload();
  });
});
