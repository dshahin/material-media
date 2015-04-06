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
    .primaryPalette('light-blue')
    .accentPalette('amber')
    .warnPalette('red');


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
