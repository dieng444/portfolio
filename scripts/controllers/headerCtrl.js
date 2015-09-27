'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:HeaderCtrl
 * @description
 * # HomeCtrl
 * Controller of the page header
 */
angular.module('portfolioApp').controller('HeaderCtrl', 
	['$scope','$location','$anchorScroll',
   function ($scope, $location, $anchorScroll) {
	$scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   };
}]);
    