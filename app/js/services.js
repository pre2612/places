'use strict';


var placesearchServices = angular.module('placesearchServices',['ngResource']);

placesearchServices.factory('Places',['$resource',function($resource){
    return $resource('data/places.json');
}]);