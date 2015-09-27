'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the home fo app
 */

angular.module('portfolioApp').controller('DetailsCtrl', 
	['$scope','$routeParams','DataService',
   function ($scope,$routeParams,DataService) {
	/********Load the current project from the uri parameter******/
	$scope.loadSingleProject = function() {
		$scope.project = DataService.get({id:$routeParams.id});
//						function(project) {
//							$scope.defaultImage = 'images/portfolio/'+$routeParams.id+'/'+$scope.project.images[0];
//							//console.log($scope.defaultImage);
//						});
		
	};
	/********Load all projects******/
	$scope.loadAllProject = function() {
		$scope.projects = DataService.query();
	}
//	$scope.slider = setInterval(function () { 
//		$scope.projects = DataService.get({id:$routeParams.id},
//						  function () {
//							
//						}
//	}, 3000);
	
	$scope.loadSingleProject();
	$scope.loadAllProject();
	
}]);
    