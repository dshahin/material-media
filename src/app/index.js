'use strict';

angular.module('materialMedia', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial','ngMdIcons',

								'com.2fdevs.videogular',
								'com.2fdevs.videogular.plugins.buffering',
								'com.2fdevs.videogular.plugins.controls',
								'com.2fdevs.videogular.plugins.overlayplay',
								'com.2fdevs.videogular.plugins.poster'

	])
  .config(function ( $stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {

  	$mdThemingProvider.theme('default')
    .primaryPalette('light-green')
    .accentPalette('green')
    .warnPalette('red');

    $mdIconProvider
                      .defaultIconSet("./assets/svg/avatars.svg", 128)
                      .icon("menu"       , "./assets/svg/menu.svg"        , 24)
                      .icon("share"      , "./assets/svg/share.svg"       , 24)
                      .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
                      .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
                      .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
                      .icon("phone"      , "./assets/svg/phone.svg"       , 512);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        icon : 'home'
      })
      .state('watch', {
        url: '/watch/:videoId',
        templateUrl: 'app/watch/watch.html',
        controller: 'WatchController as WC',
        icon : 'arrow_back'
      });

    $urlRouterProvider.otherwise('/');
  });
