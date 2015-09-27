'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the home fo app
 */
angular.module('portfolioApp').controller('HomeCtrl', 
	['$scope','$location','$anchorScroll','$http','DataService',
   function ($scope, $location, $anchorScroll, $http, DataService) {
	$scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   };
   $scope.loadTrainings = function () {
	   $http.get('data/trainings.json').success(function(data) {
	      $scope.trainings = data;
	      console.log($scope.trainings);
	    });
   };
   $scope.loadExperiences = function () {
	   $http.get('data/experiences.json').success(function(data) {
	      $scope.experiences = data;
	      console.log($scope.experiences);
	    });
   };
   $scope.loadTrainings();
   $scope.loadExperiences();
   $scope.name = "Macky";
}]);
    