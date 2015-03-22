'use strict';

angular.module('materialMedia', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial',

								'com.2fdevs.videogular',
								'com.2fdevs.videogular.plugins.buffering',
								'com.2fdevs.videogular.plugins.controls',
								'com.2fdevs.videogular.plugins.overlayplay',
								'com.2fdevs.videogular.plugins.poster'

	])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
