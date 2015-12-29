/**
 * Created by sks on 2015/11/4.
 */
angular.module("MetronicApp").controller('formSubController', ['$rootScope','$scope','$http','validateRegExp',function($rootScope, $scope, $http,validateRegExp) {
    $scope.validateRegExp = validateRegExp;
}]);