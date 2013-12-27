'use strict';

var phonecatControllers = angular.module('phonecatControllers',[]);

phonecatControllers.controller('RecipeListCtrl',['$scope','Recipe',function($scope,Recipe){
    $scope.recipes = Recipe.query();
    $scope.orderProp = 'age';
}]);

phonecatControllers.controller('RecipeDetailCtrl',['$scope','Recipe','$routeParams',function($scope,Recipe,$routeParams){
    $scope.recipe = Recipe.get({recipeId: $routeParams.recipeId},function(recipe){
        $scope.ingredient = recipe.ingredientlist;
        $scope.preparation = recipe.preparation.text;
    });
}]);