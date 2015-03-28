'use strict';

angular.module('materialMedia')
    .controller('bookmarkController', function($log, $scope, $mdDialog, $sce, $stateParams, currentTime) {
        var BC = this;
        BC.currentTime = currentTime;        
    });
