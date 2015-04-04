'use strict';

angular.module('materialMedia')
	.factory('DataFactory',DataFactory );

function DataFactory($q, $rootScope, $log) {

    var localSettingsKey = "md-media-shahin-settings";

	var factory = {
		Videos : Videos,
        getUserSettings : getUserSettings,
        setUserSettings : setUserSettings
	};

	return factory;

    function getUserSettings (){
        var deferred = $q.defer();
        var settings = angular.fromJson(localStorage.getItem(localSettingsKey));
        if(!settings){
            settings = {
                "debug" : true,
                "bookmarks" :{}
            };
        }
        deferred.resolve(settings);
        return deferred.promise;
    }

    function setUserSettings(){
        localStorage.setItem(localSettingsKey, angular.toJson($rootScope.userSettings));
    }

	function Videos () {
        var deferred = $q.defer();
        var tasks = angular.fromJson(localStorage.getItem("tasks"));
        deferred.resolve([{
            'id' : '0',
            'title': 'AngularJS',
            'url': 'https://angularjs.org/',
            'description': 'HTML enhanced for web apps!',
            'logo': 'angular.png',
            'fave' : true
        }, {
            'id' : '1',
            'title': 'BrowserSync',
            'url': 'http://browsersync.io/',
            'description': 'Time-saving synchronised browser testing.',
            'logo': 'browsersync.png',
            'fave' : false
        }, {
            'id' : '2',
            'title': 'GulpJS',
            'url': 'http://gulpjs.com/',
            'description': 'The streaming build system.',
            'logo': 'gulp.png',
            'fave' : true
        }]);

        return deferred.promise;
	}
}
