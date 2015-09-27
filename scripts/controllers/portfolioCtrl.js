'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the home fo app
 */
	
angular.module('portfolioApp').controller('PortfolioCtrl', 
	['$scope','DataService',
   function ($scope,DataService) {
	$scope.loadProjects = function() {
		$scope.projects = DataService.query();
	};
	$scope.loadProjects();
}]);
    