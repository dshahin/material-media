'use strict';

angular.module('materialMedia')
    .controller('bookmarkController', function($log, $scope, $rootScope, $mdDialog, $sce, $stateParams, currentTime) {
        var BC = this;
        BC.currentTime = currentTime;  
        BC.bookmark = {};
        BC.addBookmark = function (timestamp){
        	BC.bookmark.time = timestamp;
        	$log.log(BC.bookmark);

            $rootScope.bookmarks.push(BC.bookmark);
        	$mdDialog.hide();
        }      

    });
