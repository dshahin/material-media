'use strict';

angular.module('materialMedia')
  .controller('NavbarCtrl', function ($scope,$state) {
  	var NAV = this;
    $scope.date = new Date();
    $scope.$state = $state;
    console.log('state', $state)
  });
