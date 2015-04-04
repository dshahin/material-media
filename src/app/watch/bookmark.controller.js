'use strict';

angular.module('materialMedia')
    .controller('bookmarkController', function($log, $scope, $rootScope, $mdDialog, $sce, $stateParams, currentTime, DataFactory) {
        var BC = this;
        BC.currentTime = currentTime;  
        BC.bookmark = {};
        BC.addBookmark = function (timestamp){
        	BC.bookmark.time = timestamp;
            //$rootScope.bookmarks.push(BC.bookmark);
            $rootScope.userSettings.bookmarks[$rootScope.videoId].push(BC.bookmark);
            DataFactory.setUserSettings();
            //_addBookmark(BC.bookmark);
            // if($rootScope.bookmarks[$rootScope.videoId] === undefined){
            //     $rootScope.bookmarks[$rootScope.videoId] = {bookmarks : []};
            // }
            // $rootScope.bookmarks[$rootScope.videoId].bookmarks.push(BC.bookmark);
            $log.log($rootScope.bookmarks);
        	$mdDialog.hide();
            if($rootScope.wasFullScreen === true){
                $rootScope.API.toggleFullScreen();
                $rootScope.wasFullScreen = false;
            }
            
            $rootScope.API.play();
        }     

        function _addBookmark(bookmark){
            if($rootScope.userSettings.bookmarks[$rootScope.videoId]){
                $rootScope.userSettings.bookmarks[$rootScope.videoId].bookmarks.push[bookmark];
            }else{
                $rootScope.userSettings.bookmarks[$rootScope.videoId].bookmarks = [bookmark];
            }
        }

    });
