/**
 * Created by hxsd on 2016/12/15.
 */
//创建一个新的模块，负责过滤器
angular.module("filterModule",[]);

//创建购物车模块
angular.module("cartModule",[]);

//创建主模块
angular.module("myapp",["filterModule","cartModule","ngRoute","ngMessages"]);

//配置路由
angular.module("myapp").config(function($routeProvider){
    $routeProvider
        .when("/",{templateUrl:"views/productsList.html",controller:"productListCtrl"})
        .when("/checkout",{templateUrl:"views/checkoutSummary.html",controller:"checkoutCtrl"})
        .when("/order",{templateUrl:"views/placeOrder.html"})
        .when("/thanks",{templateUrl:"views/thankYou.html"})
        .otherwise({templateUrl:"views/productsList.html",controller:"productListCtrl"})
});




