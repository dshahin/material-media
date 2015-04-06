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
            'title': 'Big Blue Dot',
            'url': 'https://angularjs.org/',
            'description': 'HTML enhanced for web apps!',
            'logo': 'pale-blue-dot.jpg',
            'fave' : true
        }, {
            'id' : '1',
            'title': 'Big Buck Bunny',
            'url': 'http://browsersync.io/',
            'description': 'Time-saving synchronised browser testing.',
            'logo': 'bigbuckbunny.png',
            'fave' : false
        }, {
            'id' : '2',
            'title': 'The Chris Shahin Project',
            'url': 'http://browsersync.io/',
            'description': 'Time-saving synchronised browser testing.',
            'logo': 'kiss.jpg',
            'fave' : false
        }, {
            'id' : '3',
            'title': 'Edison\'s Frankenstein',
            'url': 'http://browsersync.io/',
            'description': 'Time-saving synchronised browser testing.',
            'logo': 'frankenstein.jpg',
            'fave' : false
        }]);

        return deferred.promise;
	}
}
