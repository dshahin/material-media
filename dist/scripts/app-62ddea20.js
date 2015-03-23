"use strict";angular.module("materialMedia",["ngAnimate","ngTouch","ngSanitize","ui.router","ngMaterial","com.2fdevs.videogular","com.2fdevs.videogular.plugins.buffering","com.2fdevs.videogular.plugins.controls","com.2fdevs.videogular.plugins.overlayplay","com.2fdevs.videogular.plugins.poster"]).config(["$stateProvider","$urlRouterProvider","$mdThemingProvider",function(e,t,a){a.theme("default").primaryPalette("light-green").accentPalette("green").warnPalette("red"),e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("watch",{url:"/watch/:videoId",templateUrl:"app/watch/watch.html",controller:"WatchController as WC"}),t.otherwise("/")}]),angular.module("materialMedia").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("materialMedia").controller("WatchController",["$scope","$mdDialog","$sce","$stateParams",function(e,t,a,i){var o=this;o.videoId=i.videoId,o.config={preload:"none",sources:[{src:a.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"),type:"video/mp4"},{src:a.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"),type:"video/webm"},{src:a.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"),type:"video/ogg"}],tracks:[{src:"/assets/subs/pale-blue-dot.vtt",kind:"subtitles",srclang:"en",label:"English","default":""}],theme:{url:"http://www.videogular.com/styles/themes/default/latest/videogular.css"}};var l;o.showDialog=function(){l=t.alert({title:"Attention",content:"This is an example of how easy dialogs can be!",ok:"Close"}),t.show(l)["finally"](function(){l=void 0})}}]),angular.module("materialMedia").controller("MainCtrl",["$scope","$mdDialog","$sce",function(e,t,a){e.config={preload:"none",sources:[{src:a.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"),type:"video/mp4"},{src:a.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"),type:"video/webm"},{src:a.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"),type:"video/ogg"}],tracks:[{src:"http://www.videogular.com/assets/subs/pale-blue-dot.vtt",kind:"subtitles",srclang:"en",label:"English","default":""}],theme:{url:"http://www.videogular.com/styles/themes/default/latest/videogular.css"}};var i;e.showDialog=function(){i=t.alert({title:"Attention",content:"This is an example of how easy dialogs can be!",ok:"Close"}),t.show(i)["finally"](function(){i=void 0})},e.awesomeThings=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png",fave:!0},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png",fave:!1},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png",fave:!0},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png",fave:!1},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png",fave:!0},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png",fave:!1},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png",fave:!0},{title:"Videogular",url:"http://www.videogular.com/",description:"Simple Angular Video",logo:"angular-material.png",fave:!1}],angular.forEach(e.awesomeThings,function(e){e.rank=Math.random()})}]),angular.module("materialMedia").run(["$templateCache",function(e){e.put("app/main/main.html",'<div layout="column" layout-fill=""><md-toolbar md-scroll-shrink="" class="md-toolbar-tools md-primary"><div><h1><md-button class="md-fab md-primary md-hue-3" aria-label="Profile"><a href="#/main"><i class="fa fa-home fa-2x" ng-click="item.fave = !item.fave"></i></a></md-button><span>My Videos</span><md-button class="md-warn">dsfd</md-button></h1></div></md-toolbar><md-content style="height: 100vh;"><md-list><md-item></md-item><md-item ng-repeat="item in awesomeThings"><md-item-content class="clickable"><div class="md-tile-left clickable" ui-sref="watch({ videoId : item.title})"><img ng-src="assets/images/{{item.logo}}" alt="{{item.title}}" class="face"><md-tooltip>Watch video</md-tooltip></div><div class="md-tile-content clickable" ui-sref="watch({ videoId : item.title})"><h3 ui-sref="watch({ videoId : item.title})">{{item.title}}</h3><h4>{{item.url}}</h4><p>{{item.description}}</p><md-tooltip md-direction="left">Watch video</md-tooltip></div><div class="md-tile-right" style="padding-right:15px;"><md-button class="md-fab md-primary md-hue-3" aria-label="Profile" ng-click="item.fave = !item.fave"><i class="fa fa-2x" style="color:pink;" ng-class="{\'fa-heart\':item.fave,\'fa-heart-o\':!item.fave}"></i><md-tooltip md-direction="left">Make favorite</md-tooltip></md-button></div></md-item-content><md-divider inset=""></md-divider></md-item></md-list></md-content></div>'),e.put("app/watch/watch.html",'<div layout="column" layout-fill=""><md-toolbar md-scroll-shrink=""><div class="md-toolbar-tools"><h1><md-button class="md-fab md-primary md-hue-3" aria-label="Profile"><a href="#/main"><i class="fa fa-home fa-2x" ng-click="item.fave = !item.fave"></i></a></md-button><span>Watch {{WC.videoId}}</span></h1></div></md-toolbar><md-content><section class="videogular-container"><md-checkbox ng-model="isChecked" aria-label="Finished?">Finished ?</md-checkbox><videogular vg-theme="WC.config.theme.url"><vg-media vg-src="WC.config.sources" vg-tracks="WC.config.tracks" vg-native-controls="true"></vg-media></videogular></section></md-content></div>'),e.put("components/navbar/navbar.html",'<md-toolbar md-scroll-shrink="" ng-controller="NavbarCtrl"><h3 class="md-toolbar-tools"><span>Toolbar Title</span></h3></md-toolbar>')}]);