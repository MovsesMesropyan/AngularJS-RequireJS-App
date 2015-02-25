define(['./module'], function (services) {
    'use strict';
    var HomeService = ['$http', '$location',
        function ($http, $location) {

            var GetData = {};
			
			GetData.getData = function getData() {
				return $http.get('data/data.php');
			};
			GetData.openMailData = function openMailData(mail) {
				GetData.mail = mail;
			};
            return GetData;

    }];

    services.factory('GetData', HomeService);

});