/**
 * Created by sks on 2015/11/4.
 */

angular.module('MetronicApp').controller('formSubController', function($rootScope, $scope, $http, $timeout) {
    $scope.validateRegExp = {
        intege: "^-?[1-9]\\d*$",
        // 整数
        intege1: "^[1-9]\\d*$",
        // 正整数
        Amount:"^[0-9]+(.[0-9]{1,2})?$",
        //金额（正整数 或2位小数）
        decmal6:"^[0-9]+\.[0-9]{1}$",
        //金额（1位小数）
        intege2: "^-[1-9]\\d*$",
        // 负整数
        num: "^([+-]?)\\d*\\.?\\d+$",
        // 数字
        num1: "^[1-9]\\d*|0$",
        // 正数0（正整数 + 0）
        num2: "^-[1-9]\\d*|0$",
        // 负数（负整数 + 0）
        chinese: "^[\\u4e00-\\u9fa5]+$",
        // 仅中文
        color: "^[a-fA-F0-9]{6}$",
        // 颜色
        date: "^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",
        // 日期
        email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",
        // 邮件
        idcard: "^[1-9]([0-9]{14}|[0-9]{17}|[0-9]{16}[xX]{1})$",
        // 身份证
        bankcard:"^[1-9]([0-9]{14,21})$",
        // 银行卡号
        ip4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",
        // ip地址
        letter: "^[A-Za-z]+$",
        // 字母
        letter_l: "^[a-z]+$",
        // 小写字母
        letter_u: "^[A-Z]+$",
        // 大写字母
        mobile: "^0?(13|15|18|14|17)[0-9]{9}$",
        // 手机
        notempty: "^\\S+$",
        // 非空
        password: "^.*[A-Za-z0-9\\w_-]+.*$",
        psd:"((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))",//数字字母符号中的两种
        paypsd: "^\\d{6}$",
        // 密码
        fullNumber: "^[0-9]+$",
        // 数字
        tel: "^[0-9\-()（）]{7,18}$",
        // 电话号码的函数(包括验证国内区号,国际区号,分机号)
        url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",
        // url
        username: "^[A-Za-z0-9_\\-\\u4e00-\\u9fa5]+$",
        // 户名
        deptname: "^[A-Za-z0-9_()（）\\-\\u4e00-\\u9fa5]+$",
        // 单位名
        zipcode: "^\\d{6}$",
        // 邮编
        phoneValid:"^\\d{6}$",
        //短信验证码6位
        realname: "^[A-Za-z\\u4e00-\\u9fa5]+$",
        // 真实姓名
    };
    $scope.form={};
    $scope.sub=function(){
        console.log($scope.form);
        $http.get('package.json',{params:$scope.form}).success(function (){
            alert('提交成功,欢迎你'+$scope.form.name);
            location.hash='/dashboard.html';
        }).error(function (){
            alert('失败');
        });
    };

    /*$scope.usernameBlur=function(){
        console.log($scope.userform.name.$error);
        if($scope.userform.name.$error.pattern||$scope.userform.name.$error.required){
            $scope.usernameerror='你错了兄弟，不应该这么填写';
        }else{
            $scope.usernameerror='';
        }
    };*/

    $scope.$on('$viewContentLoaded', function() {

    })
});