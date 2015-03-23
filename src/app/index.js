'use strict';

angular.module('materialMedia', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial',

								'com.2fdevs.videogular',
								'com.2fdevs.videogular.plugins.buffering',
								'com.2fdevs.videogular.plugins.controls',
								'com.2fdevs.videogular.plugins.overlayplay',
								'com.2fdevs.videogular.plugins.poster'

	])
  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

  	$mdThemingProvider.theme('default')
    .primaryPalette('light-green')
    .accentPalette('green')
    .warnPalette('red');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('watch', {
        url: '/watch/:videoId',
        templateUrl: 'app/watch/watch.html',
        controller: 'WatchController as WC'
      });

    $urlRouterProvider.otherwise('/');
  });
