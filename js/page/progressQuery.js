angular.module("MetronicApp").controller('progressQueryController', ['$rootScope','$scope','$http','validateRegExp',function($rootScope, $scope, $http) {
    $scope.queryObj = {};
    $scope.merchantObj={};
    $scope.queryStatus = function(){
        $http.get('/fund/account/check.json?merchantCode=2002',$scope.queryObj).then(function(dataObj){
                if(dataObj.data.returnCode==200){
                    $scope.queryObj = {};
                    console.log(dataObj.data.retInfo);
                    $scope.merchantObj=dataObj.data.retInfo;
                }else{
                    $scope.queryObj = {};
                    alert('查询出错，请重新查询！');
                }
            },function(err){
                $scope.queryObj = {};
                alert('查询出错，请重新查询！');
                console.log(err);
            }
        );
    };

    //datepicker
    $scope.$on('$viewContentLoaded', function() {

    });
}]);