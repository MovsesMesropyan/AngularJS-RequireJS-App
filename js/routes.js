define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider',
        function ($routeProvider) {
			$routeProvider.
				when('/home', {
					templateUrl: 'partials/home.html',
					controllerAs: 'homeCtrl',
					controller: 'HomeController'
				}).
				when('/email', {
					templateUrl: 'partials/email.html',
					controllerAs: 'emailCtrl',
					controller: 'EmailController'
				}).
				otherwise('/home');
        }]);
});
