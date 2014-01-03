'use strict';

var placesearchControllers = angular.module('placesearchControllers',[]);

placesearchControllers.controller('',['$scope',function($scope){

}]);

placesearchControllers.controller('SearchCtrl',['$scope','Places',function($scope,Places,$routeParams){
    Places.get(function(data){
        $scope.data = data.data;
    });
}]);