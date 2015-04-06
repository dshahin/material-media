'use strict';

angular.module('materialMedia')
    .controller('WatchController', function($log, $scope, $rootScope, $mdDialog, $sce, $stateParams, DataFactory) {
        var WC = this;
        WC.videoId = $stateParams.videoId;
        $rootScope.videoId = WC.videoId;
        $rootScope.API = null;
            
        WC.onPlayerReady = function(API) {
            $rootScope.API = API;
        };

        DataFactory.Videos().then(function(videos){
            $rootScope.videos = videos;
        }).then(function(){
            DataFactory.getUserSettings().then(function(userSettings){
                $rootScope.userSettings = userSettings;
                if(!userSettings.bookmarks[WC.videoId] || !userSettings.bookmarks[WC.videoId].length ){
                    userSettings.bookmarks[WC.videoId] =[];
                }
                $rootScope.bookmarks = userSettings.bookmarks[WC.videoId];
                //userSettings.bookmarks[WC.videoId] =[];
                userSettings.debug = !userSettings.debug;
                DataFactory.setUserSettings();
            });
        });

        
        WC.deleteBookmark = function($index){
            $log.log('delete ' + $index);
            $rootScope.bookmarks.splice($index,1);
            DataFactory.setUserSettings();
        };

        WC.onBookmarkChange =  function(e){
            DataFactory.setUserSettings();
        };

        WC.videos = [
            {
                sources: [
                    {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
                    {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
                    {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov"), type: "video/mp4"},
                    {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/big_buck_bunny_720p_stereo.ogg"), type: "video/ogg"}
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl("http://cdn-1.metacdn.net/bekprwejz/2QPzGQ/20150405221834-NewProject2.m4v"), type: "video/mp4"}
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl("http://cdn-1.metacdn.net/bekprwejz/4XmSGZ/20150405225208-EdisonsFrankensteinWithSoundEffectsdesktop.m4v"), type: "video/mp4"}
                ]
            }
        ];


        WC.config = {
            preload: "none",
            sources: WC.videos[WC.videoId].sources,
            tracks: [{
                src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                kind: "subtitles",
                srclang: "en",
                label: "English",
                default: ""
            }],
            theme: {
                url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
            },
            plugins: {
                poster: "assets/images/codescience-logo.png"
            }
        };
        var alert;

        // DataFactory.getBookmarks().then(function(bookmarks){
        //     console.log('here are the bookmarks');
        //     $rootScope.bookmarks = bookmarks;
        // }).then(function(){
        //     //WC.bookmarks = $rootScope.bookmarks[WC.videoId];
        //     WC.bookmarks = [];
        // });

        
        
        WC.bookmark = function(currentTime) {
            $rootScope.API.pause();
            $mdDialog.show({
                title: 'Bookmark',
                content: 'current time:' + currentTime,
                ok: foo,
                controller : 'bookmarkController as BC',
                templateUrl: 'app/watch/bookmark.dialog.html',
                locals: { currentTime: currentTime },
                onComplete: WC.bookmarkComplete
            }).finally(function(bookmark) {
                $log.log('bookmark?', bookmark);
            });

        }

        function foo(){
            alert('foo');
        };
        $rootScope.wasFullScreen = false;
        WC.bookmarkComplete = function(scope, element, options){
            if($rootScope.API.isFullScreen){
                $rootScope.wasFullScreen = true;
                $rootScope.API.toggleFullScreen();
            }
            $log.log('done');
            //$rootScope.API.play();
            $('#bookmarkDescription').focus();
        }



        $(document).keydown(function(e) {
            
            if( e.which === 66 && (e.metaKey || e.ctrlKey)){
                e.preventDefault(); // prevent the default action (scroll / move caret)
                $log.log(e);
                WC.bookmark($rootScope.API.currentTime);
            }
            
            
        });

    });
