
/* Metronic App */
var MetronicApp = angular.module("MetronicApp", [
    "ui.router",
    "oc.lazyLoad"
]);

MetronicApp.factory('validateRegExp',function(){
    return {
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
        // 正数（正整数 + 0）
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
});
/* Setup App Main Controller */
MetronicApp.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.$on('$viewContentLoaded', function() {

    });
}]);

/*MetronicApp.controller('formSubController', ['$scope', '$rootScope','validateRegExp', function($scope, $rootScope,validateRegExp) {
    $scope.$on('$viewContentLoaded', function() {
        console.log(validateRegExp);
    });
}]);*/

/* Setup Layout Part - Header */
MetronicApp.controller('HeaderController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {

    });
}]);

/* Setup Layout Part - Sidebar */
MetronicApp.controller('SidebarController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {

    });
}]);



/* Setup Layout Part - Footer */
MetronicApp.controller('FooterController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initFooter(); // init footer
    });
}]);

/*config fis3 path*/
var url={};
var path={
                'views/chanjet.html':'views/chanjet.html',
                'css/page/chanjet.css':'css/page/chanjet.css',
                'js/page/chanjet.js':'js/page/chanjet.js',

                'views/formSub.html':'views/formSub.html',
                'css/page/formSub.css':'css/page/formSub.css',
                'js/page/formSub.js':'js/page/formSub.js'
            };

try
{
    url=__RESOURCE_MAP__.res;
    for(var key in url){
        url[key]=url[key].uri
    }
}
catch (e)
{
    url=path;
}

MetronicApp.run(function($rootScope){
    $rootScope.$on('$stateChangeStart',function(event,toState,toParams,fromState,fromParams){
        $rootScope.current = toState.name;
    });
});

/* Setup Rounting For All Pages */
MetronicApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/formSub.html");
    
    $stateProvider
        .state('formSub', {
            url: "/formSub.html",
            templateUrl:url['views/formSub.html'] ,
            data: {pageTitle: 'formSub'},
            controller: "formSubController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            url['js/page/formSub.js']
                        ]
                    }]);
                }]
            }
        })
        .state('chanjet', {
            url: "/chanjet.html",
            templateUrl: url['views/chanjet.html'],
            data: {pageTitle: 'chanjet'},
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            url['css/page/chanjet.css'],
                            url['js/page/chanjet.js']
                        ]
                    }]);
                }]
            }
        })

}]);

