'use strict';

/* Services */

var portfolioServices = angular.module('portfolioServices', ['ngResource']);

portfolioServices.factory('DataService', ['$resource',
  function($resource){
    return $resource('data/:id.json', {}, {
      query: {method:'GET', params:{id:'portfolio'}, isArray:true}
    });
 }]);
