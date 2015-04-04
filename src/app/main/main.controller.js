'use strict';

angular.module('materialMedia')
    .controller('MainCtrl', function($scope, $rootScope, $mdDialog, $sce, DataFactory) {
        $scope.config = {
            preload: "none",
            sources: [{
                src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov"),
                type: "video/mp4"
            }, {
                src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/big_buck_bunny_720p_stereo.ogg"),
                type: "video/ogg"
            }],
            tracks: [{
                src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                kind: "subtitles",
                srclang: "en",
                label: "English",
                default: ""
            }],
            theme: {
                url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
            }
        };
        var alert;
        $scope.showDialog = function($event) {
            alert = $mdDialog.alert({
                title: 'Attention',
                content: 'This is an example of how easy dialogs can be!',
                ok: 'Close'
            });

            $mdDialog
                .show(alert)
                .finally(function() {
                    alert = undefined;
                });
        }

        DataFactory.Videos().then(function(videos){
            $rootScope.videos = videos;
        });
        


    })

    .directive("bookmarkButton",
        function() {
            return {
                restrict: "E",
                require: "^videogular",
                template: "<div class='iconButton' ng-click='WC.bookmark(currentTime)'><i class='fa fa-film'><md-tooltip>bookmark</md-tooltip></i></div>"
            }
        }
    );
