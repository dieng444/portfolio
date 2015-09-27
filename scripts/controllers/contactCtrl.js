'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the home fo app
 */
angular.module('portfolioApp').controller('ContactCtrl', ['$scope','$http',
   function ($scope,$http) {
	$scope.name = "";
    $scope.email = "";
    $scope.subject = "";
    $scope.message = "";
    $scope.isDataSendedSuccessly = false;
    $scope.textSended = "";
    //Premier message de test en angularJS
	/***Vérifie si le champ est invalide****/
   $scope.isInvalid = function(field){
	   return $scope.contactForm[field].$invalid && $scope.contactForm[field].$dirty;
   };
   /***Vérifie si le champ est valide****/
   $scope.isValid = function(field){
	   return $scope.contactForm[field].$valid && $scope.contactForm[field].$dirty;
   };
   $scope.submit = function () {
	   $http({
		    method: 'POST',
		    url: 'backoffice/saveData.php',
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		    transformRequest: function(obj) {
		        var str = [];
		        for(var p in obj)
		        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		        return str.join("&");
		    },
		    data: {
		    		name: $scope.name,
		    		email: $scope.email,
		    		subject : $scope.subject,
		    		message : $scope.message
				  }
		}).success(function (result) {
//			console.log(result);
//			$scope.name = "";
//		    $scope.email = "";
//		    $scope.subject = "";
//		    $scope.message = "";
			$scope.textSended = result;
		    $scope.isDataSendedSuccessly = true;
		});
   };
}]);
    