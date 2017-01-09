/**
 * Created by hxsd on 2016/12/16.
 */

angular.module("myapp")
    .controller("checkoutCtrl",function($scope,shopCart){
        //获得购物车中的商品
        $scope.cart = shopCart.findAll();

        //计算购物车的商品总金额
        $scope.summary = function(){
            var total = 0;
            //遍历统计
            angular.forEach($scope.cart,function(item){
                total += item.quantity * item.product.price;
            });
            return total;
        };

        //删除商品

        $scope.remove = function(item){
            shopCart.remove(item);
        }
    });











































