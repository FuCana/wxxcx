/**
 * Created by hxsd on 2016/12/15.
 */

angular.module("myapp")
    .controller("productListCtrl",function($scope,shopCart){
        //用户选中的商品类型
        $scope.selectedCategory = null;

        //响应用户对商品类别的选择
        $scope.selectCategory = function(category){
            $scope.pageNum = 1;
            $scope.selectedCategory = category;
        };

        //定义一个商品类过滤函数
        $scope.filterByCategory = function(product){
            //点击首页 显示全部商品
            return $scope.selectedCategory == null || product.category == $scope.selectedCategory;
        };

        //分页有关数据
        $scope.pageNum = 1;
        $scope.pageSize = 4;


        //分页按钮响应函数
        $scope.page = function(p){
            $scope.pageNum = p;
        };

        //实现添加购物车功能
        $scope.add = function(product){
            shopCart.add(product);
        }



    });