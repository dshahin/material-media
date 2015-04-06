'use strict';

angular.module('materialMedia')
    .controller('MainCtrl', function($scope, $rootScope, $mdDialog, $sce, $mdToast, DataFactory) {
        
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
        
        $scope.favorite = function(video){
            video.fave = !video.fave;
            var msg;
            if(video.fave){
                msg= video.title + ' is a favorite';
            }else{
                msg= video.title + ' is not a favorite';
            }
            $mdToast.show($mdToast.simple().content(msg));
        }

    })

    .directive("bookmarkButton",
        function() {
            return {
                restrict: "E",
                require: "^videogular",
                template: "<div class='iconButton'><i class='fa fa-bookmark-o'><md-tooltip>&#8984;B to bookmark</md-tooltip></i></div>"
            }
        }
    );
