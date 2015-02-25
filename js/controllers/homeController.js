define(['./module'], function (controllers) {
    'use strict';
    var HomeController = ['$scope', '$http', '$location', 'GetData',
        function ($scope, $http, $location, GetData) {
			GetData.getData().then(function (resp) {
				var dataConvert = [];
				for(var i = 0; i < resp.data.length; i++){
					dataConvert[i] = JSON.parse(resp.data[i]);
				}
				$scope.page = dataConvert;
            }, function (err) {
                console.log('Error loading data ', err);
            });
			$scope.mailDetails = function (mail) {
				GetData.openMailData(mail);
				$location.url('/email?Id=' + GetData.mail.Id);
			}
        }];
    controllers.controller('HomeController', HomeController);
});