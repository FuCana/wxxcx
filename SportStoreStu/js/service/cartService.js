/**
 * Created by hxsd on 2016/12/16.
 */

angular.module("cartModule")
    .factory("shopCart",function() {
        var cart = [];
        return{
            add:function(product){
                for(var i=0;i<cart.length; i++){
                    var item = cart[i];
                    if(item.product == product){
                        item.quantity++;
                        return;
                    }
                };

                cart.push({product:product,quantity:1});
            },

            findAll:function(){
                return cart;
            },

            clear:function(){

                for (var i = 0; i < cart.length; i++) {
                    cart[i].quantity = 1;
                }
                cart.splice(0,cart.length);

                return cart;
            },

            remove:function(item){
                var index = cart.indexOf(item);
                cart.splice(index,1);
                return cart;
            }
        };
    })

    //注册控制器
    .controller("cartCtrl",function($scope,shopCart){
        //获得购物车里所有商品
        var cart = shopCart.findAll();
        //计算商品的购买总量
        $scope.count = function(){
            var total = 0;
            //遍历统计
            angular.forEach(cart,function(item){
                total += item.quantity;
            });
            return total;
        };
        //计算购买总金额
        $scope.money = function(){
            var total = 0;
            //遍历统计
            angular.forEach(cart,function(item){
                total += item.quantity * item.product.price;
            });
            return total;
        }
    });
