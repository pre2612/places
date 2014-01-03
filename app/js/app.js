'use strict';

var placesearchApp = angular.module('placesearchApp',[
'ngRoute',
 'placesearchControllers',
 'placesearchServices'

]);

placesearchApp.config(['$routeProvider',
function($routeProvider){
    $routeProvider.when('/zipcode',{
        templateUrl: 'partials/zipcode.html',
        controller: 'ZipCtrl'
    }).
    when('/zipcode/:zipcode',{
       templateUrl:'partials/search.html',
       controller: 'SearchCtrl'
    })
    otherwise({
        redirectTo: '/zipcode'
   });
}]);