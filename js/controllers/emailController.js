define(['./module'], function (controllers) {
    'use strict';
    var EmailController = ['$scope', '$location', 'GetData',
        function ($scope, $location, GetData) {
			GetData.getData().then(function (resp) {
				if($location.search().Id) {
					for(var i = 0; i < resp.data.length; i++){
						if(JSON.parse(resp.data[i]).Id == $location.search().Id) {
							$scope.mailData = JSON.parse(resp.data[i]);
						}
					}
				}
				else {
					$scope.mailData = {};
					$scope.mailData.Content = 'There is not message! Please go to mail box';
				}
            }, function (err) {
                console.log('Error loading data ', err);
            });
        }];
    controllers.controller('EmailController', EmailController);
});