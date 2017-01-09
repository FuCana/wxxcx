/**
 * Created by hxsd on 2016/12/16.
 */
//在主模块中注册一个控制器，负责维护订单数据

angular.module("myapp").controller("orderCtrl",function($scope){
    $scope.data = {
        shipping:{}    //保存用户的收货信息
    };
});