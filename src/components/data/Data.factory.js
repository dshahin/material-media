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
            'title': 'Dev Challenge #4',
            'url': 'https://angularjs.org/',
            'description': 'Entry by Dan Shahin.  Please watch and learn about this app.',
            'logo': 'codescience-logo.png',
            'fave' : true
        }, {
            'id' : '0',
            'title': 'Big Blue Dot',
            'url': 'https://angularjs.org/',
            'description': 'Life on Earth',
            'logo': 'pale-blue-dot.jpg',
            'fave' : true
        }, {
            'id' : '1',
            'title': 'Big Buck Bunny',
            'url': 'http://browsersync.io/',
            'description': 'Funny Animals made with open source tools.',
            'logo': 'bigbuckbunny.png',
            'fave' : false
        }, {
            'id' : '2',
            'title': 'The Chris Shahin Project',
            'url': 'http://browsersync.io/',
            'description': 'The Ulitimate Rock Experience',
            'logo': 'kiss.jpg',
            'fave' : false
        }, {
            'id' : '3',
            'title': 'Edison\'s Frankenstein',
            'url': 'http://browsersync.io/',
            'description': 'Early film experiments by Thomas Edison',
            'logo': 'frankenstein.jpg',
            'fave' : false
        }]);

        return deferred.promise;
	}
}
