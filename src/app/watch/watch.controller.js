'use strict';

angular.module('materialMedia')
    .controller('WatchController', function($log, $scope, $rootScope, $mdDialog, $sce, $stateParams) {
        var WC = this;
        WC.videoId = $stateParams.videoId;
        WC.API = null;
            
        WC.onPlayerReady = function(API) {
            WC.API = API;
        };

        WC.config = {
            preload: "none",
            sources: [{
                src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"),
                type: "video/mp4"
            }, {
                src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"),
                type: "video/webm"
            }, {
                src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"),
                type: "video/ogg"
            }],
            tracks: [{
                src: "/assets/subs/pale-blue-dot.vtt",
                kind: "subtitles",
                srclang: "en",
                label: "English",
                default: ""
            }],
            theme: {
                url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
            },
            plugins: {
                poster: "/assets/images/angular.png"
            }
        };
        var alert;
        $rootScope.bookmarks = [];
        WC.bookmark = function(currentTime) {
            WC.API.pause();
            $mdDialog.show({
                title: 'Bookmark',
                content: 'current time:' + currentTime,
                ok: 'Make a bookmark',
                controller : 'bookmarkController as BC',
                templateUrl: 'app/watch/bookmark.dialog.html',
                locals: { currentTime: currentTime },
                onComplete: WC.bookmarkComplete
            }).finally(function(bookmark) {
                $log.log('bookmark?', bookmark);
            });

            

            // $mdDialog
            //     .show(alert)
            //     .finally(function() {
            //         alert = undefined;
            //     });
        }
        
        WC.bookmarkComplete = function(scope, element, options){
            $log.log('done');

        }

    });
