angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {links: ''};


  $scope.getLinks = function(){
    Links.getLinks().then(function(data){
      $scope.data.links = data.data;
    });
  };

  $scope.init = function(){
    $scope.getLinks();
  };
  $scope.init();

});
// .controller('DemoCtrl', function($scope, $aside) {
//   // Show a basic aside from a controller
//   var myAside = $aside({title: 'My Title', content: 'My Content', show: true});

//   // Pre-fetch an external template populated with a custom scope
//   var myOtherAside = $aside({scope: $scope, template: 'app/shorten/shorten.html'});
//   // Show when some event occurs (use $promise property to ensure the template has been loaded)
//   myOtherAside.$promise.then(function() {
//     myOtherAside.show();
//   })
// });
