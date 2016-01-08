/**
 * Created by sks on 2015/11/4.
 */
angular.module("MetronicApp").controller('formSubController', ['$rootScope','$scope','$http','validateRegExp',function($rootScope, $scope, $http,validateRegExp) {
    $scope.validateRegExp = validateRegExp;
    $scope.user={
        idType:'营业执照',
        curType:'人民币'
    };
    //datepicker
    $scope.$on('$viewContentLoaded', function() {
        $('.datepicker').datepicker({
            autoclose:true,
            format:"yyyy年mm月dd",
            language:"zh"
        });
        $http.get('/fund/account/open/getApplyId.json',{}).then(function(dataObj){
                if(dataObj.data.returnCode==200){
                    $scope.user.applyId=dataObj.data.retInfo;
                }else{
                    location.hash='/error.html';
                }
            },function(){
                location.hash='/error.html';
            }
        );
    });
}]);